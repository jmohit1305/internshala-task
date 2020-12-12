const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/Users.js");

router.post("/", (req, res) => {
  Users.findOne({
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      res.send("NO");
    } else {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result === true) {
          res.send("YES");
        } else if (result === false) {
          res.send("WRONG");
        }
      });
    }
  });
});

module.exports = router;
