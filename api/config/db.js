const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const mongoDB = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("Connect with DB"))
    .catch(err => console.log(err));
};

module.exports = mongoDB();
