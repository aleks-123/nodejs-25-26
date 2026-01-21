const fs = require("fs"); //вчитување на пакет/модул за работа со filesystem - фајлови и директориуми

//! Синхрони функции
const vcituvanjeNaTekst = fs.readFileSync("./tekst.txt", "utf-8");
console.log(vcituvanjeNaTekst);

const podatok = `# nodejs-25-26`;
fs.writeFileSync("./novtekst.md", podatok);
console.log("uspesno zapisuvanje na tekst");

//! CALLBACK FUNKCIJA
function pozdrav(ime, callback) {
  console.log(`zdravo ${ime}`);
  callback();
}
function chao() {
  console.log("chao");
}
// pozdrav("Mirko", chao);

//!Асинхрона функција

fs.readFile("./tekst.txt", "utf-8", (err, text) => {
  fs.readFile("./novtekst.md", "utf-8", (err, text2) => {
    if (err) {
      return console.log("nastana greska");
    }
    console.log(text, text2);
  });
});

fs.readFile("./tekst.txt", "utf-8", (err, text) => {
  if (err) {
    return console.log("Nastana greska");
  }
  console.log(text);
});

fs.writeFile("./asyhronoWrite.txt", "Mirko, Petko, Risto", "utf-8", (err) => {
  if (err) console.log("Nastana greska");
  console.log("Uspesno zapisuvanje ne tekst");
});

//! Asyhrona funkcija so promis patern

// cekor 1
//* Definiranje na promis funkcija
// const fileWrite = () => {};

// cekor 2
//* funkcijata kje ni vrati nob promise objekt
// const fileWrite = () => {
//   return new Promise();
// };

// cekor 3
//*kje kreirame executor funkcija vo samiot promise
// const fileWrite = () => {
//   return new Promise(() => {});
// };

// cekor 4
//* kje vnesime dva parametri, success i faill koi se callback funkcii
// const fileWrite = () => {
//   return new Promise((success, fail) => {});
// };

// cekor 5
//* Kje ja zapiesheme fs.writeFile metodata od Node vnatre vo egzekucionata funkcija

// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile("data.txt", "Hello from promise", (err) => {
//       if (err) return console.log(err);
//       console.log("Zapisot e uspesno napraven");
//     });
//   });
// };

// cekor 6
//* Kje gi iskoristime success i fail parametrite

// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile("data.txt", "Hello from promise", (err) => {
//       if (err) return fail(err);
//       return success();
//     });
//   });
// };

// cekor 7
//* modularna verzija

const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(filename, data, (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

const main = async () => {
  try {
    await fileWrite("data.txt", "Nov podatok od promise");
    await fileWrite("data1.txt", "Nov podatok od promise asjdfgnlksafgnassadj");
    const ovoshja = await fileRead("ovoshje.txt");
    console.log(ovoshja);
  } catch (err) {
    console.log(err);
  }
};
main();

//! Promisot може да има три состојби
//Pending (Чекање): Иницијална состојба, не е ни исполнет ни одбиен.
//fullfiled: Означува дека операцијата завршича успешно
//рејected: Означува дека операцијата завршила со грешка

// fs.unlink
// fs.mkdir
// fs.appendFile
// fs.rmdir

// fileRead
// fileWrite
