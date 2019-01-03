const aws = require('aws-sdk');
const config = require('./config');

const spacesEndpoint = new aws.Endpoint(config.spaceLocation);

exports.config = config;

exports.cdnURL = `https://${config.bucket}.${config.serverLocation}.cdn.${
  config.providerAddress
}/`;

exports.s3 = new aws.S3({
  endpoint: spacesEndpoint
});
