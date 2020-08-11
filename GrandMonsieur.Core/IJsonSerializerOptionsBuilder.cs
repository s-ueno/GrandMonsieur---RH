using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;

namespace GrandMonsieur.Core
{
    public interface IJsonSerializerOptionsBuilder
    {
        JsonSerializerOptions Build();
    }
}
