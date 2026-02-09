const studenti = require("../models/studenti");

const getForm = (req, res) => {
  res.render("formular");
};

const postForm = async (req, res) => {
  try {
    const data = {
      ime: req.body.ime,
      prezime: req.body.prezime,
      prosek: req.body.prosek,
    };

    console.log(data);

    await studenti.add(data);

    res.redirect("/studenti");
  } catch (err) {
    res.send(err.message);
  }
};

const getStudenti = async (req, res) => {
  try {
    const data = await studenti.list();
    res.render("studenti", { data });
  } catch (err) {
    res.send("Greska 505");
  }
};

const getBrishi = async (req, res) => {
  try {
    const vrednost = req.params.i;
    await studenti.remove(+vrednost);
    res.redirect("/studenti");
  } catch (err) {
    res.send("Greska 505");
  }
};

module.exports = {
  getForm,
  postForm,
  getStudenti,
  getBrishi,
};
