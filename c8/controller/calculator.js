const fs = require("fs");
const { parseTemplate } = require("../utils/index");

const bmiCalculator = async (req, res) => {
  //Izvrsuvanje na logika
  const weight = req.params.weight;
  const height = req.params.height;
  const bmi = weight / (height * height);

  //Parsira HTML i polni so dinamicki informacii
  const response = await parseTemplate("calculator.html", {
    data: bmi,
    ime: "BMI CALCULATOR",
    test: "bla bla bla",
  });

  //Go isprakja html dokumentot kon klientot
  res.send(response);
};

const test = async (req, res) => {
  const response = await parseTemplate("calculator.html");
  res.send(response);
};

const getCalculator = async (req, res) => {
  const response = await parseTemplate("calculator_from.html");
  res.send(response);
};
const postCalculator = async (req, res) => {
  if (req.body.a === "" || req.body.b === "") {
    return res.status(400).send("bad request");
  }
  let rezultat = "";
  switch (req.body.op) {
    case "sobiranje":
      rezultat = `${Number(req.body.a) + Number(req.body.b)}`;
      break;
    case "odzemanje":
      rezultat = `${Number(req.body.a) - Number(req.body.b)}`;
      break;
    case "delenje":
      rezultat = `${Number(req.body.a) / Number(req.body.b)}`;
      break;
    case "mnozenje":
      rezultat = `${Number(req.body.a) * Number(req.body.b)}`;
      break;
    default:
      rezultat = `nepoznat operator!`;
  }

  const response = await parseTemplate("calculator.html", {
    data: rezultat,
    ime: req.body.op,
    test: "KALKULATORR",
  });

  res.send(response);
};

module.exports = {
  bmiCalculator,
  test,
  getCalculator,
  postCalculator,
};
