const express = require("express");
const cors = require("cors");
require("./config/db.js");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
