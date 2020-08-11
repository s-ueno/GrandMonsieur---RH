using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
namespace GrandMonsieur.Core
{
    public abstract class CommandService<TRequest, TResponse> : ICommandService
    {
        public CommandService() : this(null) { }
        public CommandService(IServiceProvider provider)
        {
            Provider = provider;
        }

        protected IServiceProvider Provider { get; }

        protected HttpClient HttpClient
        {
            get
            {
                return Provider?.GetService<IHttpClientFactory>()?.CreateClient();
            }
        }

        protected virtual JsonSerializerOptions SerializerOptions
        {
            get
            {
                return Provider?.GetService<IJsonSerializerOptionsBuilder>()?.Build() ?? DefaultSerializerOptions;
            }
        }

        // https://docs.microsoft.com/ja-jp/dotnet/standard/serialization/system-text-json-how-to?view=netcore-3.1
        protected virtual JsonSerializerOptions DefaultSerializerOptions
        {
            get
            {
                return new JsonSerializerOptions()
                {
                    /* JSON中のコメントを許可する */
                    ReadCommentHandling = JsonCommentHandling.Skip,
                    /* JSONの末尾にカンマが入ることを許可する */
                    AllowTrailingCommas = true,
                    /* 大文字・小文字を区別しない */
                    PropertyNameCaseInsensitive = true,
                    /* Nullの値は読み取りも書き込みも除外する */
                    IgnoreNullValues = true
                };
            }
        }


        public abstract Task<TResponse> ExecuteAsync(TRequest request);

        async Task<object> ICommandService.Execute(object obj)
        {
            return await ExecuteAsync((TRequest)obj);
        }

        protected virtual HttpClient CreateHttpClient()
        {
            return HttpClient ?? new HttpClient();
        }

        public async Task<Response> JsonWebRequestAsync<Request, Response>(string uri, Request request)
        {
            return await CreateHttpClient().JsonPostAsync<Request, Response>(uri, request, SerializerOptions);
        }
    }

}
