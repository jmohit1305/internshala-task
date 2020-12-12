const express = require("express");
const router = express.Router();
const Users = require("../models/Users.js");

const bcrypt = require("bcryptjs");
const saltRounds = 10;

router.post("/", (req, res) => {
  const { name, email, phNumber, dob, password } = req.body;

  Users.findOne({
    email: email,
  }).then((user) => {
    if (user) {
      res.send("EXIST");
    } else {
      bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        Users.create(
          {
            name: name,
            email: email,
            phNumber: phNumber,
            dob: dob,
            password: hash,
          },
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.send("REGISTERED");
            }
          }
        );
      });
    }
  });
});

module.exports = router;
