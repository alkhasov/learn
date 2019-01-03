const aws = require('./space');
const multer = require('./multer');
const config = require('./config');

exports.default = (req, res) => {
  console.log(`ss`);
  res.send('qq');
};

exports.putFiles = (req, res, next) => {
  multer.upload(req, res, function(error) {
    if (error) {
      console.log(error);
      return res.redirect('/error');
    }
    console.log('File uploaded successfully.');
    res.redirect('/success');
  });
};

exports.getFiles = (req, res, next) => {
  //console.log(req.url);
  const delimeter =
    req.query.inFolders == false ||
    req.query.inFolders == undefined ||
    req.query.inFolders == null
      ? '/'
      : '';
  const path = req.path.replace(/^\/+/, '') || '/';

  aws.s3
    .getObject({ Bucket: config.bucket, Key: path })
    .promise()
    .then(data => {
      //console.log(data);
      console.log(path);
      res.writeHead(200, {
        'Content-Type': data.ContentType,
        'Content-Length': data.ContentLength
      });
      res.end(data.Body);
      return;
    })
    .catch(err => {
      //console.error(err);
      res.status(403).end('Access forbidden');
      return;
    });

  //res.status(500).end('/r bad request');
};

exports.getList = (req, res, next) => {
  console.warn('List here');
  //console.log(req.ip);
  if (
    !req.body.path ||
    !req.body.access ||
    typeof req.body.access != 'string' ||
    typeof req.body.path != 'string'
  ) {
    res.status(400).end();
    return;
  }
  if (req.body.access != 'ee' && req.body.access != 'aa') {
    res.status(403).end();
    return;
  }
  let subBucket = '';
  if (req.body.access == 'ee') subBucket = 'r/';

  const path = String(req.body.path.replace(/^\/+/, ''));
  const base = path == '/' ? '' : path;

  if (base != '' && base[base.length - 1] !== '/') {
    res.status(400).end('Wrong path');
    return;
  }

  const prefix = subBucket + base;
  console.log(`prefix: `, prefix, prefix.length);

  const delimeter =
    req.body.inFolders == false ||
    req.body.inFolders == undefined ||
    req.body.inFolders == null
      ? '/'
      : '';
  aws.s3
    .listObjectsV2({
      Bucket: config.bucket,
      Delimiter: delimeter,
      Prefix: prefix
    })
    .promise()
    .then(data => {
      const valid = data.Contents.filter(e => e.Key != prefix);
      const links = valid.map(e => aws.cdnURL + e.Key);

      //console.log(data.Contents);'https://s3.maga.ws/'
      res.send(links);
    })
    .catch(err => console.log(err));
};
