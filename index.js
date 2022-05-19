const express = require("express");
const app = express();

require("./db/conn");
const User = require("./models/userSchema");
app.use(express.json());
app.use(require("./router/user"));

app.listen("5000", () => {
  console.log("server listening on port 5000...");
});
