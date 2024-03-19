const express = require("express");
const register = require("../controllers/Register");
const login = require("../controllers/Login");
const { getAllUser } = require("../controllers/GetAllUsers");
const followUser = require("../controllers/FollowUser");
const authenticateUser = require("../middlewares/AuthenticateUser");
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

Router.route("/getAllUsers").post(getAllUser);

Router.route("/followUser").post(authenticateUser, followUser);

module.exports = Router;
