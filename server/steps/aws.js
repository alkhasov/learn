// Load dependencies
const aws = require("aws-sdk");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const multerS3 = require("multer-s3");

const app = express();

app.use(express.static("public"));

// Body Parser Init
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Set S3 endpoint to DigitalOcean Spaces
const config = {
  serverLocation: `ams3`,
  providerAddress: `digitaloceanspaces.com`,
  bucket: "maga"
};

const spaceLocation = config.serverLocation + "." + config.providerAddress;
const spacesEndpoint = new aws.Endpoint(spaceLocation);

const baseURL = `https://${config.bucket}.cdn.${spaceLocation}/`;

const s3 = new aws.S3({
  endpoint: spacesEndpoint
});

// Change bucket property to your Space name
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.bucket,
    acl: "public-read",
    key: function(request, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    }
  })
}).array("upload", 1);

let params = {
  Bucket: config.bucket,
  Key: "app_1_p.png"
};

app.get("/image", (req, res, next) => {
  s3.deleteObject(params)
    .promise()
    .then(data => {
      //let urlArr = data.Contents.map(e => baseURL + e.Key);
      console.log(data);
    })
    .catch(err => console.log(err));
});

app.post("/get_file", function(req, res, next) {
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

app.post("/listr", function(req, res, next) {
  console.log("Listr here");
  s3.listObjectsV2({ Bucket: config.bucket, Delimiter: "/", Prefix: "" })
    .promise()
    .then(data => {
      console.log(data.Contents.map(e => baseURL + e.Key));
      //console.log(data);
    })
    .catch(err => console.log(err));
  res.end();
});

app.get("/users/:userId", function(req, res) {
  res.send(req.params);
});

// Views in public directory

// Main, error and success views
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/public/index.html");
});

app.get("/success", function(request, response) {
  response.sendFile(__dirname + "/public/success.html");
});

app.get("/error", function(request, response) {
  response.sendFile(__dirname + "/public/error.html");
});

app.post("/upload", function(request, response, next) {
  upload(request, response, function(error) {
    if (error) {
      console.log(error);
      return response.redirect("/error");
    }
    console.log("File uploaded successfully.");
    response.redirect("/success");
  });
});

app.listen(3001, function() {
  console.log("Server listening on port 3001.");
});
