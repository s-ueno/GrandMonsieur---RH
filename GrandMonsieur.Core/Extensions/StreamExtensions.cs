using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Text;
using System.Threading.Tasks;

namespace GrandMonsieur.Core
{
    public static class StreamExtensions
    {
        public static async Task<string> ReadLineAsync(this StreamReader reader, int retryCount = 3)
        {
            try
            {
                return await reader.ReadLineAsync();
            }
            catch (Exception)
            {
                if (--retryCount <= 0)
                    throw;

                await Task.Delay(1000);
            }
            return await ReadLineAsync(reader, retryCount);
        }


        public static byte[] ReadFully(this Stream input)
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

        public static StreamReader DecompressAsStreamReader(this Stream source)
        {
            var mem = new MemoryStream();
            using (var stream = new GZipStream(source, CompressionMode.Decompress, leaveOpen: true))
            {
                stream.CopyTo(mem);
            }
            return new StreamReader(mem, Encoding.UTF8);
        }

        public static byte[] Decompress(this byte[] gzip)
        {
            using (var stream = new GZipStream(new MemoryStream(gzip), CompressionMode.Decompress, leaveOpen: true))
            {
                const int size = 4096;
                byte[] buffer = new byte[size];
                using (MemoryStream memory = new MemoryStream())
                {
                    int count = 0;
                    do
                    {
                        count = stream.Read(buffer, 0, size);
                        if (count > 0)
                        {
                            memory.Write(buffer, 0, count);
                        }
                    }
                    while (count > 0);
                    return memory.ToArray();
                }
            }
        }
        public static byte[] Compress(this byte[] bytes)
        {
            using (var mem = new MemoryStream())
            {
                using (GZipStream zipStream = new GZipStream(mem, CompressionMode.Compress, leaveOpen: true))
                {
                    zipStream.Write(bytes, 0, bytes.Length);
                }
                return mem.ToArray();
            }

        }
    }

}
