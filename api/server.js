const express = require("express");
const helmet = require("helmet");
const SchemeRouter = require("../schemes/scheme-router.js");

// const db = require("../data/db-config.js");
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/recipes", SchemeRouter);




module.exports = server;