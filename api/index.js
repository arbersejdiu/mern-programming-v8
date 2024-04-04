const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/user.route.js");
require("./config/db.js");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.use("/api/user", UserRoute);
app.use("/auth/user", UserRoute);

module.exports = app;
