const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initializations
const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(port, () => {
  console.log(`\x1b[1m`, `Server listening on port ${port}.`);
});
