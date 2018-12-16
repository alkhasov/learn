// Load dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initializations
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database
mongoose.connect(
  "mongodb://localhost/resthub",
  { useNewUrlParser: true } // default url parser is deprecated
);

// API Parts
app.use("/api/contacts/", require("./contacts"));

// Index Logic
app.get("/api/", function(req, res) {
  // API Desctiption view
  res.status(200).json({
    message: "This is API made for learning express and mongodb"
  });
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(port, () => {
  console.log(`\x1b[1m`, `Server listening on port ${port}.`);
});
