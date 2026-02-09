const express = require("express");
const formular = require("./controller/formular");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/form", formular.getForm);
app.post("/form", formular.postForm);
app.get("/studenti", formular.getStudenti);
app.get("/brishi/:", formular.getBrishi);

const model = require("../models/studenti");

app.listen(10000, (err) => {
  if (err) return console.log(error.message);
  console.log("Server successfully started on port 100000");
});
