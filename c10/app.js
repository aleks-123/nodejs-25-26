const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// app.get("/form");
// app.get("/form");

const model = require('../models/studenti')




app.get('/brishi/:i. ' (req, res) => {
  req.params.i

  await model.remove(+req.params.i)
})







app.listen(10000, (err) => {
  if (err) return console.log(error.message);
  console.log("Server successfully started on port 100000");
});



ejs.forEach(s, i) => [s.ime, s.prezime, i], [asdgsadg]

a href="/brishi/ <%= i %>"
a href="/brishi/ <%= i %>"
a href="/brishi/ <%= i %>"
a href="/brishi/ <%= i %>"
a href="/brishi/ <%= i %>"
a href="/brishi/ <%= i %>"

