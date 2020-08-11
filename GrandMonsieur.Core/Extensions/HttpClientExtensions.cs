using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;
using System.IO;

namespace GrandMonsieur.Core.Extensions
{
    public static class HttpClientExtensions
    {
        public static async Task<TResponse> JsonPostAsync<TRequest, TResponse>(
            this HttpClient httpClient, string uri, TRequest request, int retry = 10)
        {
            var jsonRequest = System.Text.Json.JsonSerializer.Serialize(request);
            var content = new StringContent(jsonRequest, Encoding.UTF8, "application/json");

            var message = await httpClient.PostAsync(uri, content);
            var httpStatus = (int)message.StatusCode;
            if (200 <= httpStatus && httpStatus < 400)
            {
                var json = await message.Content.ReadAsStringAsync();
                if (string.IsNullOrWhiteSpace(json)) return default(TResponse);

                return System.Text.Json.JsonSerializer.Deserialize<TResponse>(json);
            }

            if (--retry <= 0)
                throw new ApplicationException($"JsonPostAsync error - {httpStatus}:{await message.Content.ReadAsStringAsync()}");

            await Task.Delay(1000);

            return await JsonPostAsync<TRequest, TResponse>(httpClient, uri, request, retry);
        }

        public static async Task<Stream> GetStreamAsync(this HttpClient httpClient, string uri, int retryCount = 10)
        {
            try
            {
                return await httpClient.GetStreamAsync(uri);
            }
            catch (Exception ex)
            {
                if (--retryCount <= 0)
                    throw ex;
            }

            await Task.Delay(300);

            return await httpClient.GetStreamAsync(uri, retryCount);
        }
        public static async Task<Stream> GetStreamAsync(this HttpClient httpClient, Uri uri, int retryCount = 10)
        {
            try
            {
                return await httpClient.GetStreamAsync(uri);
            }
            catch (Exception ex)
            {
                if (--retryCount <= 0)
                    throw ex;
            }

            await Task.Delay(300);

            return await httpClient.GetStreamAsync(uri, retryCount);
        }
    }
}
