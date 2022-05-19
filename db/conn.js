const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("CONNECTED SUCCESSFULLY TO MONGODB...");
  })
  .catch((e) => {
    console.log("---ERROR CONNECTING TO MONGODB---\n", e);
  });
