const express = require("express");
const register = require("../controllers/Register");
const login = require("../controllers/Login");
const Router = express.Router();

Router.route("/register")
  .get((req, res) => {
    res.json({
      message: "Contact helpline email address!",
    });
  })
  .post(register);

Router.route("/login")
  .get((req, res) => {
    res.json({
      message: "Contact helpline email address!",
    });
  })
  .post(login);

module.exports = Router;
