const express = require("express");
const { signup } = require("../controllers/auth.controller.js");
const router = express.Router();

router.post("/signup", signup);
// router.get("/signin", signin);
// router.get("/signout", signout);

module.exports = router;
