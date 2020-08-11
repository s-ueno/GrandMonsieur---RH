using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;

namespace GrandMonsieur.Core.Extensions
{
    public static class ObjectExtensions
    {
        public static T To<T>(this object value)
        {
            return (T)value.To(typeof(T));
        }

        public static object To(this object value, Type type)
        {
            return type.IsConstructedGenericType ? value.To_Generic(type) : value.To_NonGeneric(type);
        }

        static object To_NonGeneric(this object value, Type type)
        {
            if (type.IsEnum)
            {
                if (value == null) throw new ArgumentNullException("value");
                return Enum.Parse(type, value.ToString());
            }
            else if (type == typeof(DateTimeOffset))
            {
                if (value == null) throw new ArgumentNullException("value");
                return DateTimeOffset.Parse(value.ToString());
            }
            else if (type == typeof(Guid))
            {
                if (value == null) throw new ArgumentNullException("value");
                return Guid.Parse(value.ToString());
            }
            else if (type == typeof(TimeSpan))
            {
                if (value == null) throw new ArgumentNullException("value");
                return TimeSpan.Parse(value.ToString());
            }
            else
            {
                return Convert.ChangeType(value, type);
            }
        }

        static object To_Generic(this object value, Type type)
        {
            var definition = type.GetGenericTypeDefinition();
            if (definition == typeof(Nullable<>))
            {
                return value == null ? null : value.To_NonGeneric(type.GenericTypeArguments[0]);
            }
            else
            {
                throw new InvalidCastException("The target type is not supported.");
            }
        }


        public static byte[] ToBinary(this object obj)
        {
            if (obj == null) return null;
            using (var st = new MemoryStream())
            {
                var ser = new BinaryFormatter();
                ser.Serialize(st, obj);
                return st.ToArray();
            }
        }

        public static object ToObject(this byte[] arr)
        {
            if (arr == null) return null;
            using (var st = new MemoryStream(arr))
            {
                var ser = new BinaryFormatter();
                return ser.Deserialize(st);
            }
        }

    }

}
