const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { getUsers, getSingleUser } = require("./controllers/GetAllUsers");
const { getPosts } = require("./controllers/GetAllPost");
const app = express();

const homeRouter = require("./routes/home.routing");
const userRouter = require("./routes/user.routing");
const postRouter = require("./routes/post.routing");

/**
 * @dev middleware space
 */
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: true,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 1,
    },
  })
);
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

(async function () {
  const allPosts = await getPosts();
  const allUser = await getUsers();
  
  const server = new ApolloServer({
    typeDefs: `
      type User {
        _id: ID!
        username: String!
        email: String!
        followers: [User]
        following: [User]
      }

      type Post {
        content: String
        author: ID!
      }

      type Query {
        getUsers: [User]
        getPosts: [Post]
      }
    `,
    resolvers: {
      Query: {
        getUsers: () => allUser,
        getPosts: () => allPosts,
      },
    },
  });
  await server.start();
  app.use("/graphql", expressMiddleware(server));
})();

/**
 * @dev Routing requests
 */

app.use("/", homeRouter);
app.use("/api/v2/user", userRouter);
app.use("/api/v2/post", postRouter);

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
});

module.exports = app;
