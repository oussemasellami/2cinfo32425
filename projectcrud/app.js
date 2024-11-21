const http = require("http");
const express = require("express");
const userRouter = require("./routes/users");
const mongo = require("mongoose");
const db = require("./config/db.json");
mongo
  .connect(db.url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

var app = express();
app.use(express.json())
app.use("/users", userRouter);
const server = http.createServer(app, console.log("server run!!!"));
server.listen(3000);
