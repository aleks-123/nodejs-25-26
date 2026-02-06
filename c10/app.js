const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.listen(10000, (err) => {
  if (err) return console.log(error.message);
  console.log("Server successfully started on port 100000");
});
