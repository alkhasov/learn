const config = {
  serverLocation: `ams3`,
  providerAddress: `digitaloceanspaces.com`,
  bucket: 'maga'
};

exports.serverLocation = config.serverLocation;
exports.providerAddress = config.providerAddress;
exports.bucket = config.bucket;
exports.spaceLocation = config.serverLocation + '.' + config.providerAddress;
