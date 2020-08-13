const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

const routes = require("./routes/api");

const MONGODB_URI =
  "mongodb+srv://LelloDB:ElieDB@lellodb-wgkna.mongodb.net/LelloDB?retryWrites=true&w=majority";

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!");
});

app.use(cors());
app.use(morgan("tiny"));
app.use("/", routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
