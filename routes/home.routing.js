const express = require("express");
const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.json({
      message: "Hello! from Server",
      date: Date(),
    });
  })
  .post((req, res) => {
    const data = req.body;
    res.json({
      message: "Home!",
      date: Date(),
      data,
    });
  });

module.exports = Router;
