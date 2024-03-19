const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const homeRouter = require("./routes/home.routing");
const userRouter = require("./routes/user.routing");

/**
 * @dev middleware space
 */
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(morgan("tiny")); // Log request path
app.disable("x-powered-by");
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/**
 * @dev Routing requests
 */

app.use('/',homeRouter);
app.use("/api/v2/user", userRouter);


app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
});

module.exports = app;
