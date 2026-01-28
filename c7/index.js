const express = require("express");

const app = express();

app.get("/zdravo", (req, res) => {
  res.send("Zdravo svetu");
});

app.get("/zdravo/:ime/:prezime", (req, res) => {
  res.send(`Zdravo ${req.params.ime} ${req.params.prezime}`);
});

app.get("/calculator/:op/:a/:b", (req, res) => {
  switch (req.params.op) {
    case "sobiranje":
      return res.send(`${Number(req.params.a) + Number(req.params.b)}`);
    case "odzemanje":
      return res.send(`${Number(req.params.a) - Number(req.params.b)}`);
    case "delenje":
      return res.send(`${Number(req.params.a) / Number(req.params.b)}`);
    case "mnozenje":
      return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
    default:
      return res.send("nepoznat operator");
  }
});

app.get("/ime/:ime", (req, res) => {});

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log("Server started on 10000 port");
});
