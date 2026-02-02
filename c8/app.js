//!MVP - Arhitektura

const express = require("express");
const calculator = require("./controller/calculator");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/bmi/:weight/:height", calculator.bmiCalculator);

app.get("/calculator", calculator.getCalculator);
app.post("/calculator", calculator.postCalculator);

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log("server started");
});

//? Da se kreira kalkulator sto kje kalkulira 2 njutnov zakon
//get
//post metoda
// mass * accelaration
