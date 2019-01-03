// Load dependencies
const aws = require('aws-sdk');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const multerS3 = require('multer-s3');

const nanoid = require('nanoid');

const app = express();

app.use(express.static('public'));

// Body Parser Init
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Set S3 endpoint to DigitalOcean Spaces
const config = {
  serverLocation: `ams3`,
  providerAddress: `digitaloceanspaces.com`,
  bucket: 'maga'
};

const spaceLocation = config.serverLocation + '.' + config.providerAddress;
const spacesEndpoint = new aws.Endpoint(spaceLocation);

const cdnURL = `https://${config.bucket}.${config.serverLocation}.cdn.${
  config.providerAddress
}/`;

const s3 = new aws.S3({
  endpoint: spacesEndpoint
});

// Change bucket property to your Space name
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.bucket,
    acl: 'private',
    key: function(request, file, cb) {
      console.log(file);
      cb(null, nanoid(20) + '.' + String(file.originalname.match(/[^.]+$/)));
    }
  })
}).array('upload', 1);

app.post('/upload', function(req, res, next) {
  upload(req, res, function(error) {
    if (error) {
      console.log(error);
      return res.redirect('/error');
    }
    console.log('File uploaded successfully.');
    res.redirect('/success');
  });
});

/* let params = {
  Bucket: config.bucket,
  Key: 'app_1_p.png'
};

app.get('/image', (req, res, next) => {
  s3.deleteObject(params)
    .promise()
    .then(data => {
      //let urlArr = data.Contents.map(e => baseURL + e.Key);
      console.log(data);
    })
    .catch(err => console.log(err));
}); */

app.post('/get_file', function(req, res, next) {
  console.log(`Getting file ${req.body.key}`);
  s3.getObject({ Bucket: config.bucket, Key: req.body.key })
    .promise()
    .then(data => {
      //let urlArr = data.Contents.map(e => baseURL + e.Key);
      console.log(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
  res.status(200).end();
});

app.get(/r+\/+\w/, (req, res, next) => {
  //console.log(req.url);
  const delimeter =
    req.query.inFolders == false ||
    req.query.inFolders == undefined ||
    req.query.inFolders == null
      ? '/'
      : '';
  const path = req.path.replace(/^\/+/, '') || '/';

  s3.getObject({ Bucket: config.bucket, Key: path })
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
});

app.post('/list', function(req, res, next) {
  //console.warn('List here');
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
  s3.listObjectsV2({
    Bucket: config.bucket,
    Delimiter: delimeter,
    Prefix: prefix
  })
    .promise()
    .then(data => {
      const valid = data.Contents.filter(e => e.Key != prefix);
      const links = valid.map(e => cdnURL + e.Key);

      //console.log(data.Contents);'https://s3.maga.ws/'
      res.send(links);
    })
    .catch(err => console.log(err));
});

app.get('/users/:userId', function(req, res) {
  res.send(req.params);
});

// Views in public directory

// Main, error and success views
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/success', function(req, res) {
  res.send('Success');
});

app.get('/error', function(req, res) {
  res.send('Erros');
});

app.get(/./, (req, res) => res.status(404).send('No such request'));

app.listen(3001, function() {
  console.log('Server listening on port 3001.');
});
