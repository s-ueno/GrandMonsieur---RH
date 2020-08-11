using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace GrandMonsieur.Core
{
    public static class WebServiceUtil
    {
        public static async Task<Response> JsonPostAsync<Request, Response>(
            this HttpClient httpClient,
            string uri,
            Request request,
            JsonSerializerOptions serializerOptions = null)
        {
            var bytes = System.Text.Json.JsonSerializer.SerializeToUtf8Bytes(request);
            using (var httpRequest = new HttpRequestMessage())
            {
                httpRequest.Method = HttpMethod.Post;
                httpRequest.RequestUri = new Uri(uri);
                httpRequest.Content = new StreamContent(new MemoryStream(bytes));

                var response = await httpClient.SendAsync(httpRequest);
                if (response.StatusCode == HttpStatusCode.InternalServerError)
                {
                    throw new System.ApplicationException("Faasの呼び出しに失敗しました");
                }

                var stream = await response.Content.ReadAsStreamAsync();
                var obj = await System.Text.Json.JsonSerializer.DeserializeAsync<Response>(stream, serializerOptions ?? DefaultOption());
                return obj;
            }
        }

        public static JsonSerializerOptions DefaultOption()
        {
            return new JsonSerializerOptions()
            {
                PropertyNameCaseInsensitive = true
            };
        }
    }

}
