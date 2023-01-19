const express = require("express");
const PORT = 8080;

const dbConnection = require("./dbConnection");
const app = express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
const postRouter = require("./routes/post.js");
// middleware

// Routes
app.get("/", (req, res) => {
  res.send("I am from Home ");
});

app.use("/post", postRouter);

// ======================MONGODB CONNCETIONS+++++++++=========================
dbConnection();

app.listen(PORT, () => {
  console.log("server runnig on http://localhost:8080");
});
