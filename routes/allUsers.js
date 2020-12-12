const express = require("express");
const router = express.Router();
const Users = require("../models/Users.js");

router.get("/getallUsers", (req, res) => {
  Users.find((err, users) => {
    res.send(users);
  });
});

module.exports = router;
