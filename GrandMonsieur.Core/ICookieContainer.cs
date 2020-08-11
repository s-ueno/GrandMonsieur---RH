using System;
using System.Collections.Generic;
using System.Text;

namespace GrandMonsieur.Core
{
    public interface ICookieContainer
    {
        Dictionary<string, string> CookieContainer { get; set; }
    }
}
