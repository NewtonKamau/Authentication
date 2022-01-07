//require mongoose
var mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//connect to database
var dbConn = mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

module.exports = dbConn;

