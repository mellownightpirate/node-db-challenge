const express = require("express");
const helmet = require("helmet");
const projectsRouters = require("./data/routers/projectsRouters");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api", projectsRouters);

module.exports = server;