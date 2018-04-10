const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to Mongo.");
  })
  .catch(err => {
    console.log("Error connecting to the database.");
  });

const operations = require("./friend/operations");

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.use("/api/friends", operations);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("Running On Port port:"+ port));