const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const nanoid = require('nanoid');
const space = require('./space');

exports.upload = multer({
  storage: multerS3({
    s3: space.s3,
    bucket: space.config.bucket,
    acl: 'private',
    key: function(request, file, cb) {
      console.log(file);
      cb(null, nanoid(20) + '.' + String(file.originalname.match(/[^.]+$/)));
    }
  })
}).array('upload', 1);
