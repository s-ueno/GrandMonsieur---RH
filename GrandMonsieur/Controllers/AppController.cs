using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Authentication;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Server.HttpSys;
using System.Security.AccessControl;
using System.Text.RegularExpressions;
using GrandMonsieur.Core;

namespace GrandMonsieur.Controllers
{
#if DEBUG
    // [RequireHttps]
#else
    [RequireHttps]
#endif
    public class AppController : Controller
    {
        protected IHttpClientFactory ClientFactory { get; set; }
        protected ILogger Logger { get; set; }
        protected IServiceProvider Provider { get; set; }

        protected virtual async Task<IActionResult> InvokeAsync<TWebService, TRequest, TResponse>(TRequest request)
            where TWebService : ICommandService
        {
            this.Ensure(typeof(TWebService));
            try
            {
                var svc = Provider.GetService<TWebService>();
                if (svc == null)
                {
                    Logger.LogWarning($"DIに未登録のサービスです...{typeof(TWebService).FullName}");
                    svc = Activator.CreateInstance<TWebService>();
                }

                if (svc is ICookieContainer cc)
                {
                    if (cc.CookieContainer == null) cc.CookieContainer = new Dictionary<string, string>();

                    var cookie = Request.Cookies;
                    if (cookie != null)
                    {
                        foreach (var each in cookie)
                        {
                            cc.CookieContainer[each.Key] = each.Value;
                        }
                    }
                }

                // Facadeを実行
                var response = await svc.Execute(request);

                // Facadeで確定したUserAccountの情報をCookieへ反映
                await EnsureCookieAsync();

                return await ToJsonAsync((TResponse)response);
            }
            catch (Exception error)
            {
                Trace.TraceError(error.ToString());
                Logger.LogError(error.ToString());
                if (error.InnerException != null)
                    Trace.TraceError(error.InnerException.ToString());

                return ToError(error);
            }
        }

        protected string Site()
        {
            return Microsoft.AspNetCore.Http.Extensions.UriHelper.BuildAbsolute(Request.Scheme, Request.Host);
        }

        #region ToJson

        protected async Task<IActionResult> ToJsonAsync<T>(T obj)
        {
            var mediaType = new MediaTypeHeaderValue("application/json");
            mediaType.Encoding = Encoding.UTF8;

            this.Response.ContentType = mediaType.ToString();

            var bytes = System.Text.Json.JsonSerializer.SerializeToUtf8Bytes(obj);
            await Response.Body.WriteAsync(bytes);

            return new EmptyResult();
        }

        protected ActionResult ToEmpty()
        {
            var mediaType = new MediaTypeHeaderValue("application/x-www-form-urlencoded");
            mediaType.Encoding = Encoding.UTF8;

            this.Response.ContentType = mediaType.ToString();

            return new EmptyResult();
        }

        #endregion

        #region ToError

        protected ActionResult ToError<T>(T error) where T : Exception
        {
            var httpStatus = HttpStatusCode.InternalServerError;
            var jsonSetting = new System.Text.Json.JsonSerializerOptions()
            {
                AllowTrailingCommas = true,
                IgnoreNullValues = true,
            };
            // jsonSetting.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
            var jsonResult = new JsonResult(new
            {
                ErrorMessage = error.Message,
                ErrorStacktrace = error.ToString(),
                ErrorStatus = 500,
            }, jsonSetting);

            if (error is ApplicationException appError)
            {
                // IIS と Azure WebApps でhttp status 時のレスポンス設定に差が出る（200系以外だとレスポンスの内容が自動的に上書きされる）
                httpStatus = HttpStatusCode.Accepted;
                jsonResult = new JsonResult(new
                {
                    ErrorMessage = appError.Message,
                    ErrorStacktrace = appError.ToString(),
                    ErrorStatus = 422,
                    InnerException = appError.InnerException?.Message,
                }, jsonSetting);
            }
            else if (error is AuthenticationException authError) /* セッション切れなどの認証エラー */
            {
                httpStatus = HttpStatusCode.Unauthorized;

                jsonResult = new JsonResult(new
                {
                    authError.Message,
                    InnerException = authError?.InnerException?.Message,
                }, jsonSetting);
            };

            // httpstatusコードを設定する(500系はAjaxでのfaile、202系はエラーではなく、正常系としてdoneへ)
            this.Response.StatusCode = (int)httpStatus;
            return jsonResult;
        }

        #endregion

        #region　ParseRequest

        protected async Task<T> ParseRequestAsync<T>()
        {
            if (Request == null) return default(T);
            var result = default(T);
            try
            {
                var json = await (new StreamReader(Request.Body).ReadToEndAsync());
                result = System.Text.Json.JsonSerializer.Deserialize<T>(json);
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.ToString());
            }
            return result;
        }

        protected T ParseRequest<T>()
        {
            if (Request == null) return default(T);
            var result = default(T);
            try
            {
                var bytes = ReadFully(Request.Body);
                result = System.Text.Json.JsonSerializer.Deserialize<T>(bytes);
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.ToString());
            }
            return result;
        }

        public static byte[] ReadFully(Stream input)
        {
            byte[] buffer = new byte[16 * 1024];
            using (MemoryStream ms = new MemoryStream())
            {
                int read;
                while ((read = input.Read(buffer, 0, buffer.Length)) > 0)
                {
                    ms.Write(buffer, 0, read);
                }
                return ms.ToArray();
            }
        }

        #endregion


        #region Ensure

        protected virtual void Ensure(Type service = null)
        {
            ViewBag.Identity = String.Empty;
            if (Request != null)
            {
                ViewBag.QueryString = string.Empty;
                if (Request.QueryString != null)
                {
                    ViewBag.QueryString = Request.QueryString.ToString();
                }
            }
        }

        /// <summary>最新のユーザーアカウント情報で Cookies  を確定させる</summary>
        protected virtual async Task EnsureCookieAsync()
        {
            var requestCookie = Request.Cookies;
            await Task.CompletedTask;
        }

        #endregion

        #region

        public string UrlCombine(params string[] parts)
        {
            if (parts == null)
                throw new ArgumentNullException(nameof(parts));

            string result = "";
            bool inQuery = false, inFragment = false;

            string CombineEnsureSingleSeparator(string a, string b, char separator)
            {
                if (string.IsNullOrEmpty(a)) return b;
                if (string.IsNullOrEmpty(b)) return a;
                return a.TrimEnd(separator) + separator + b.TrimStart(separator);
            }

            foreach (var part in parts)
            {
                if (string.IsNullOrEmpty(part))
                    continue;

                if (result.EndsWith("?") || part.StartsWith("?"))
                    result = CombineEnsureSingleSeparator(result, part, '?');
                else if (result.EndsWith("#") || part.StartsWith("#"))
                    result = CombineEnsureSingleSeparator(result, part, '#');
                else if (inFragment)
                    result += part;
                else if (inQuery)
                    result = CombineEnsureSingleSeparator(result, part, '&');
                else
                    result = CombineEnsureSingleSeparator(result, part, '/');

                if (part.Contains("#"))
                {
                    inQuery = false;
                    inFragment = true;
                }
                else if (!inFragment && part.Contains("?"))
                {
                    inQuery = true;
                }
            }
            return EncodeIllegalCharacters(result);
        }

        /// <summary>
        /// URL-encodes characters in a string that are neither reserved nor unreserved. Avoids encoding reserved characters such as '/' and '?'. Avoids encoding '%' if it begins a %-hex-hex sequence (i.e. avoids double-encoding).
        /// </summary>
        /// <param name="s">The string to encode.</param>
        /// <param name="encodeSpaceAsPlus">If true, spaces will be encoded as + signs. Otherwise, they'll be encoded as %20.</param>
        /// <returns>The encoded URL.</returns>
        public static string EncodeIllegalCharacters(string s, bool encodeSpaceAsPlus = false)
        {
            if (string.IsNullOrEmpty(s))
                return s;

            if (encodeSpaceAsPlus)
                s = s.Replace(" ", "+");

            // Uri.EscapeUriString mostly does what we want - encodes illegal characters only - but it has a quirk
            // in that % isn't illegal if it's the start of a %-encoded sequence https://stackoverflow.com/a/47636037/62600

            // no % characters, so avoid the regex overhead
            if (!s.Contains("%"))
                return Uri.EscapeUriString(s);

            // pick out all %-hex-hex matches and avoid double-encoding 
            return Regex.Replace(s, "(.*?)((%[0-9A-Fa-f]{2})|$)", c => {
                var a = c.Groups[1].Value; // group 1 is a sequence with no %-encoding - encode illegal characters
                var b = c.Groups[2].Value; // group 2 is a valid 3-character %-encoded sequence - leave it alone!
                return Uri.EscapeUriString(a) + b;
            });
        }

        #endregion
    }
}