const express = require("express");
const Router = express.Router();
const post = require("../controllers/Post");
const authenticateUser = require("../middlewares/AuthenticateUser");

Router.route("/create")
  .get((req, res) => {
    res.status(400).json({
      message: "Invalid request",
    });
  })
  .post(authenticateUser, post);

module.exports = Router;
