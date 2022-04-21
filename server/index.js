const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const app = express();

const http = require("http");
const server =  http.createServer(app);

const port = process.env.PORT;

// load middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup routes
app.use(require("./routes/@record"));

console.log("Connecting to database...");
mongoose
  .connect(process.env.DB)
  .then((res) => {
    mongoose.connection.collections.users.drop();
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
