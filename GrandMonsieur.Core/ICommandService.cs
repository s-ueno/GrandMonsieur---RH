using System;
using System.Threading.Tasks;

namespace GrandMonsieur.Core
{
    public interface ICommandService
    {
        Task<object> Execute(object obj);
    }
}
