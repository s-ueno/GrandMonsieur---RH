using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace GrandMonsieur.Core
{
    public static class ActionProxyUtil
    {
        public static IServiceCollection AddSingletonWithProxy<TService, TImplementation>(this IServiceCollection services)
            where TService : class
            where TImplementation : class, TService
        {
            services.AddSingleton<TService, TImplementation>(x => {
                object ins = x.GetService<TService>();
                object proxy = ActionProxy.Create<TService, ActionProxy>();
                ((ActionProxy)proxy).Instance = ins;

                return (TImplementation)proxy;
            });
            return services;
        }
    }

    /// <summary>
    /// dotnet core compatible version of RealProxy
    /// </summary>
    /// <remarks>
    /// RealProxy needed MarshalByRefObject for base class.
    /// Instead, all the actions of the acquired service have been proxied.
    /// 
    /// DispathProxy implements an arbitrary interface in the base class and acquires the service via that interface.
    /// The object to be proxied is the signature of the interface
    /// </remarks>
    public class ActionProxy : DispatchProxy
    {

        public virtual object Instance { get; set; }
        protected string Identity { get; set; }
        public ActionProxy(ILogger log)
        {
            this.Identity = Guid.NewGuid().ToString();
            _log = log;
        }

        public LogLevel Level { get; set; }
        public ILogger Logger { get; private set; }
        ILogger _log;

        protected override object Invoke(MethodInfo targetMethod, object[] args)
        {
            if (targetMethod == null)
                throw new ArgumentNullException(nameof(targetMethod));

            object result;


            Begin(targetMethod, args);
            try
            {
                result = targetMethod.Invoke(Instance, args);
            }
            catch (Exception ex)
            {
                if (ex is TargetInvocationException tex)
                {
                    Error(targetMethod, tex ?? ex);
                    Finally(targetMethod);
                    throw tex ?? ex;
                }
                else
                {
                    Error(targetMethod, ex);
                    Finally(targetMethod);
                    throw;
                }
            }


            if (result is Task task)
            {
                task.ContinueWith(t =>
                {
                    if (t.Exception != null)
                    {
                        Error(targetMethod, t.Exception);
                    }
                    else
                    {
                        Complate(targetMethod, result);
                    }
                    Finally(targetMethod);
                });

            }
            else
            {
                Complate(targetMethod, result);
                Finally(targetMethod);
            }
            return result;
        }

        protected virtual void Begin(MethodInfo targetMethod, object[] args)
        {
            if (LogLevel.Information <= this.Level)
            {
                Logger?.LogInformation($"{Identity} ---Begin--- {Instance?.GetType()?.FullName}.{targetMethod.Name}");
            }

            if (LogLevel.Debug <= this.Level)
            {
                var sb = new StringBuilder();
                var ps = targetMethod.GetParameters();
                if (ps != null && ps.Any())
                {
                    for (int i = 0; i < ps.Length; i++)
                    {
                        var p = ps[i];
                        var s = $"Type:{p.ParameterType.FullName}\tName:{p.Name}\tValue:";
                        if (args != null && i <= args.Length)
                        {
                            s += $"{args[1]}";
                        }
                        sb.AppendLine(s);
                    }
                }
                Logger?.LogDebug($"Parameters\n{sb.ToString()}");
            }
        }
        protected virtual void Complate(MethodInfo targetMethod, object result)
        {
            if (LogLevel.Information <= this.Level)
            {
                Logger?.LogInformation($"{Identity} ---Complate--- {Instance?.GetType()?.FullName}.{targetMethod.Name}");
            }

            if (result is Task task)
            {
                if (LogLevel.Debug <= this.Level)
                {
                    Logger?.LogDebug("result is async task");
                }
            }
            else
            {
                if (LogLevel.Debug <= this.Level)
                {
                    using (var mem = new MemoryStream())
                    {
                        var sw = new StreamWriter(mem, Encoding.UTF8);
                        ObjectDumper.Write(result, 1, sw);
                        sw.Flush();

                        Logger?.LogDebug(Encoding.UTF8.GetString(mem.ToArray()));
                    }
                }
            }
        }
        protected virtual void Error(MethodInfo targetMethod, Exception ex)
        {
            if (LogLevel.Information <= this.Level)
            {
                Logger?.LogError($"{Identity} ---Error--- {Instance?.GetType()?.FullName}.{targetMethod.Name}\t{ex.ToString()}");
            }
        }
        protected virtual void Finally(MethodInfo targetMethod)
        {
            if (LogLevel.Information <= this.Level)
            {
                Logger?.LogInformation($"{Identity} ---Finally--- {Instance?.GetType()?.FullName}.{targetMethod.Name}");
            }
        }
    }
}
