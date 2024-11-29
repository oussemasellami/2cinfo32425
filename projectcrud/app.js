const http = require("http");
const express = require("express");
const path = require("path");
const userRouter = require("./routes/users");
//const productRouter = require("./routes/products");
const mongo = require("mongoose");
const db = require("./config/db.json");
mongo
  .connect(db.urlnew)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(express.json());
app.use("/users", userRouter);
//app.use("/products", productRouter);
const server = http.createServer(app, console.log("server run!!!"));
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("user connected");

  socket.emit("msg", "user connected");

  socket.on("msg", (data) => {
    console.log(data);
    io.emit("msg", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");

    io.emit("msg", "user disconnected");
  });
});

server.listen(3000);
