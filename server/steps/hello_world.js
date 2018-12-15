const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

app.get("/", (req, res) => res.send("Privet, mir!"));

app.listen(port, () =>
  console.log(
    `Server from ${path.basename(__filename)} running on port ${port}`
  )
);
