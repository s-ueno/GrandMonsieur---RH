using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace GrandMonsieur.Core
{
    public static class AppUtil
    {
        static AppUtil()
        {
            // https://stackoverflow.com/questions/39573571/net-core-console-application-how-to-configure-appsettings-per-environment
            // http://michaco.net/blog/EnvironmentVariablesAndConfigurationInASPNETCoreApps
            // 柔軟性から、GetEnvironmentVariableよりもConfigurationBuilderが進められているので、そっちにする
            var builder = new ConfigurationBuilder()
                            .AddJsonFile("local.settings.json", true)
                            .AddEnvironmentVariables();

            _configuration = builder.Build();
        }
        private static readonly IConfigurationRoot _configuration;


        public static T GetAppConfigValue<T>(string key, T defaultValue = default(T))
        {
            try
            {
                var val = _configuration[key];
                if (string.IsNullOrWhiteSpace(val))
                    return defaultValue;

                defaultValue = (T)TypeDescriptor.GetConverter(typeof(T)).ConvertFrom(val);
            }
            catch
            {
            }
            return defaultValue;
        }


        /// <summary>
        /// 文字列から列挙体の値を取得します
        /// </summary>
        /// <typeparam name="T">列挙体の型</typeparam>
        /// <param name="str">文字列</param>
        /// <param name="defValue">デフォルト値</param>
        /// <returns>成功した場合はパースした値を返し、失敗した場合はデフォルト値を返します</returns>
        public static T GetEnumValue<T>(string str, T defValue) where T : struct
        {
            if (!Enum.TryParse<T>(str, out T result))
                return defValue;

            return result;
        }

        /// <summary>
        /// 文字列から列挙体の値を取得します
        /// </summary>
        /// <typeparam name="T">列挙体の型</typeparam>
        /// <param name="str">文字列</param>
        /// <returns>成功した場合はパースした値を返し、失敗した場合はnullを返します</returns>
        public static T? GetEnumValue<T>(string str) where T : struct
        {
            if (!Enum.TryParse<T>(str, out T result))
                return null;

            return result;
        }
    }

}
