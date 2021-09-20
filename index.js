const connectToMongo = require("./db");
const cors = require("cors");
require("dotenv").config();

connectToMongo();

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

//Available routes

app.use("/posts", require("./routes/fetchData"));
app.use("/createNote", require("./routes/pushData"));

app.get("/", (req, res) => {
  res.send("Hello Roshan!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
