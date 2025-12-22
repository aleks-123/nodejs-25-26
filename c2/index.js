//* Функции во JavaScript

// Functional Declaration (Funkcionalni deklaracii)
console.log(`Sobirokot e ${sobirok(10, 3)}`);

function sobirok(a, b) {
  return a + b;
}
console.log(`Sobirokot e ${sobirok(2, 3)}`);
console.log(`Sobirokot e ${sobirok(3, 3)}`);
console.log(`Sobirokot e ${sobirok(3, 4)}`);

// Functional Expressions (Funkcionalna ekspresija)
const proizvod = function (a, b) {
  return a * b;
};
console.log(`prozivod e ${proizvod(2, 3)}`);

// Fat-Arrow Function
const razlika = (a, b) => a - b;
console.log(`Razlikata e ${razlika(10, 4)}`);

//? Kreirajte funkcija sto presmetuva perimetar na pravoagolnik

// Metodi vo JavaScript

const ucenik = {
  ime: "Trajan",
  prezime: null,
  pozdrav: function () {
    console.log(`Zdravo, ${this.ime}`);
  },
};

ucenik.pozdrav();

// IIFFE
(function () {
  console.log("IIFFE");
})();

//? Zadaca broj 1
// Da se kreira funkcionalna ekspresija so ime c2f koja kje konvertira celziusovi sptenei vo farenhajt

//? Zadaca broj 2
// Da se kreira Fat Arrow Function so ime f2c koja kje konvertira od farehajt vo celzius i kova vo megju vreme kje logira ako temepratara e pod 0, kje logira deka temepraturata e niska, od 0 do 22 stepeni kje logira deka temperaturata e noormalna i nad 22 stepeni kje logira temperaturata e pokachena
// Napomena funkcijata treba da go vrati brojot vo stepeni

//high order function
// primer 1
function mnozenje(broj1) {
  return function (broj2) {
    return broj2 * broj1;
  };
}

const pomnozen = mnozenje(2);
console.log(pomnozen(2));

// primer 2

function calculator(operacija) {
  return function (a, b) {
    switch (operacija) {
      case "soberi":
        return a + b;
      case "odzemi":
        return a - b;
      case "pomnozi":
        return a * b;
      case "podeli":
        return a / b;
    }
  };
}

const soberiOperacija = calculator("soberi");
console.log(soberiOperacija(2, 3));
console.log(soberiOperacija(6, 3));
const podeliOperacija = calculator("podeli");
console.log(podeliOperacija(18, 3));

// Zadaca broj 4, da se kreira funkcija koja kje zema kako argument c2f ili f2c i koja kje pretvara cel vo far i obratno

//! undefined
//! null

//! TYPEOF
console.log(typeof undefined);
console.log(typeof 230);
console.log(typeof 12n);
console.log(typeof false);
console.log(typeof "false");
console.log(typeof null);
console.log(console.log);
console.log(console);

//! BOOLEAN TRUE FALSE
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("1")); //true
console.log(Boolean("")); //false

console.log(2 > 1);
console.log(2 == "2");
console.log(2 === "2");
console.log(2 != 1);

console.log(`${+true}`);
console.log(`${+false}`);
console.log(`${+""}`);

//!    ||   -> or
//!    &&.  -> and

//! or
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); // true
console.log(false || false); //false

//! and
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); // false
console.log(false && false); //false

//! Ternary opeartors
// uslov ? uslovot e tocen : uslovot ako e netocen
const godini = 16;
const vozdrast = godini >= 18 ? "polnoletno" : "ne e polnoletno";
console.log(vozdrast);

//! Working with arrays

const arrayEden = [5, 2, 4, 6, 7, 8, 3, 7, 6];
const arrayDva = [5, 2, 4, 6, 7, 8, 3, 7];
const arrayNov = [];

// arrayNov[0] = arrayEden[0] + 1;
// arrayNov[1] = arrayEden[1] + 1;
// arrayNov[2] = arrayEden[2] + 1;
// arrayNov[3] = arrayEden[3] + 1;
// console.log(arrayNov);

for (let i = 0; i < arrayEden.length; i++) {
  // const bilosto = arrayEden[i] + 1;
  arrayNov[i] = arrayEden[i] + 1;
}

console.log(arrayNov);

// Implementacija na gotovi higher-order funkcii vo javascript
// map, forEach, reduce, filter i sort

//! forEach vrshi iteracija na sekoj element vo arrayot znaci ne mo modificira arrayot po defult tuku samo go izminuca
arrayEden.forEach((item, i) => console.log(i));
arrayDva.forEach((item, i, arr) => (arr[i] = item + 10));

//! MAP metoda izminuva niza, i rezultatot e nova niza
const novaNiza = arrayEden.map((item, i) => {
  return i + 1;
});

console.log(novaNiza);

//! Reduce reducira/namaluva/sumira niza na eden edeinstven rezultat
// const arrayEden = [5, 2, 4, 6, 7, 8, 3, 7];
const rezultat = arrayEden.reduce((acc, s) => {
  return acc + s;
}, 0);

console.log(rezultat);

//! FILTER vrakja niza od elementi koi odgovaraat na postaven uslov

const brojkiFilter = arrayEden.filter((item) => {
  return item > 5;
});
console.log(brojkiFilter);

//! Find vrakja element od nizata koj odgovara za postaven uslov

const brojkaFind = brojkiFilter.find((s) => {
  return s === 6;
});

console.log(brojkaFind);

const studenti = [
  { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Vesna", prosek: 9.1, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
  { ime: "Vancho", prosek: 9.4, grad: "Kumanovo" },
  { ime: "Simona", prosek: 9.7, grad: "Kratovo" },
  { ime: "Trajamla", prosek: 7.4, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Ohrid" },
  { ime: "Natasha", prosek: 9.0, grad: "Kichevo" },
  { ime: "Stanko", prosek: 8.5, grad: "Demir Kapija" },
  { ime: "Damjan", prosek: 6.2, grad: "Kumanovo" },
  { ime: "Sandra", prosek: 8.2, grad: "Ohrid" },
];

const filtriraniStudenti = studenti
  .filter((student) => student.prosek > 9.2)
  .sort((a, b) => b.prosek - a.prosek)
  .slice(0, 3);

const baranjeNaStipendist = studenti.find((student) => student.prosek === 10);

const ocenkitStudent = studenti.map((s) => {
  return {
    ...s,
    prosek: s.prosek > 7.1 ? s.prosek + 1 : s.prosek,
  };
});

//! Kopiranje na array
const array1 = [2, 5, 7, 8, 9, 1];
const array2 = [6, 2, 3, 7, 1, 9, 8];
const array3 = [...array1, ...array2, 10, 11, 12];
console.log(array3);

const obj1 = {
  item1: "First",
  item2: "second",
};

const test = {
  ...obj1,
};

const newObject = {
  ...obj1,
  item3: "third",
};

console.log(newObject);

//! Destruction on Array (Razlozuvanje)

const arr1 = [1, 3, 7];
const [a, b, c] = arr1;
console.log(a);

const arr2 = [50, 100, 200, 300, 500];
const [element, element2, ...remaningElements] = arr2;
console.log(element);
console.log(element2);
console.log(remaningElements);

//! Destruction on Objects

const myObjects = { produkt: "Smoki", cena: 500, kolicina: 120, zemjaNaPoteklo: "Rumunija" };
const { produkt: nashTermin, cena: prodaznacena } = myObjects;
console.log(nashTermin, prodaznacena);

console.log(
  `Vo republika Makedonija produktot ${nashTermin} momentalno se prodava so ovaa cena ${prodaznacena} izos vo denari`
);

//? Домашна
//? 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
//? 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
//? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
//? 4. Вкупен просек на студенти кои се од Куманово
//? 5. Просек на просеците од градовите Скопје и Охрид
//? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево
//? 7. Да се избрише првиот студент во студенти
//? 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)
