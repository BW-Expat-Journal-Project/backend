const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

//router
const authRouter = require("../auth/auth-router");
const postRouter = require("../posts/posts-router");

//mwauthorization
const restrictedmw = require("../auth/auth-middleware");

//server
const server = express();

//router
server.use(cors());
server.use(express.json());
server.use("/", helmet());
server.use("/", morgan("--API testing for Expat Journal BuildWeek--"));

//routes
server.use("/api/auth", authRouter);
server.use("/api/posts", restrictedmw, postRouter);
server.get("/", (req, res) => {
  res.status(200).json({ server: "Expat Journal BuildWeek" });
});

module.exports = server;
