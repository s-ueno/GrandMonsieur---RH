using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace GrandMonsieur.Core.Data
{
    public class BlobStorageService
    {
        private CloudBlobClient _blobClient;
        private CloudBlobContainer _blobContainer;

        protected virtual string ConnectionString
        {
            get
            {
                if (string.IsNullOrWhiteSpace(_connectionString))
                    _connectionString = AppUtil.GetAppConfigValue("AzureWebJobsStorage", "UseDevelopmentStorage=true");
                return _connectionString;
            }
            set
            {
                _connectionString = value;
            }
        }
        private string _connectionString;

        protected BlobStorageService(string connectionString)
        {
            if (!string.IsNullOrWhiteSpace(connectionString))
                ConnectionString = connectionString;

            var strageAccount = CloudStorageAccount.Parse(ConnectionString);
            _blobClient = strageAccount.CreateCloudBlobClient();
        }

        public static async Task<BlobStorageService> CreateAsync(string containerName = "blobcontainer")
        {
            return await CreateAsync("", containerName);
        }
        public static async Task<BlobStorageService> CreateAsync(string connectionString, string containerName)
        {
            var instance = new BlobStorageService(connectionString);
            await instance.InitializeAsync(containerName);
            return instance;
        }

        public async Task InitializeAsync(string containerName)
        {
            _blobContainer = _blobClient.GetContainerReference(containerName);
            await _blobContainer.CreateIfNotExistsAsync();
            await _blobContainer.SetPermissionsAsync(
                new BlobContainerPermissions { PublicAccess = BlobContainerPublicAccessType.Blob });
        }

        public async Task<Uri> UploadFromStreamAsync(Stream stream, string directoryName, string blobName)
        {
            var directory = _blobContainer.GetDirectoryReference(directoryName);
            var blob = directory.GetBlockBlobReference(blobName);
            await blob.UploadFromStreamAsync(stream);
            return blob.Uri;
        }

        public async Task<bool> ExistsAsync(Uri uri)
        {
            var reference = await _blobClient.GetBlobReferenceFromServerAsync(uri);
            return await reference.ExistsAsync();
        }
        public async Task<bool> ExistsAsync(string directoryName, string blobName)
        {
            var directory = _blobContainer.GetDirectoryReference(directoryName);
            var blob = directory.GetBlockBlobReference(blobName);
            return await blob.ExistsAsync();
        }


        public async Task DeleteAsync(Uri uri)
        {
            var reference = await _blobClient.GetBlobReferenceFromServerAsync(uri);
            await reference.DeleteAsync();
        }
        public async Task DeleteAsync(string directoryName, string blobName)
        {
            var directory = _blobContainer.GetDirectoryReference(directoryName);
            var blob = directory.GetBlockBlobReference(blobName);
            await blob.DeleteIfExistsAsync();
        }

        public async Task DeleteDirectoryAsync(string directoryName)
        {
            var directory = _blobContainer.GetDirectoryReference(directoryName);
            foreach (CloudBlob blob in (await directory.ListBlobsSegmentedAsync(new BlobContinuationToken())).Results)
            {
                await blob.DeleteIfExistsAsync();
            }
        }

        public async Task<IEnumerable<Uri>> ListBlobUri(string directoryName)
        {
            var directory = _blobContainer.GetDirectoryReference(directoryName);
            return (await directory.ListBlobsSegmentedAsync(new BlobContinuationToken())).Results.Select(blob => blob.Uri);
        }

        public async Task GetBlobItemAsync(Stream stream, string directoryName, string blobName)
        {
            var directory = _blobContainer.GetDirectoryReference(directoryName);
            var blob = directory.GetBlockBlobReference(blobName);
            await blob.DownloadToStreamAsync(stream);
        }

        public async Task<Stream> ReadStream(string directoryName, string blobName)
        {
            var directory = _blobContainer.GetDirectoryReference(directoryName);
            var blob = directory.GetBlockBlobReference(blobName);
            return await blob.OpenReadAsync();
        }

    }
}
