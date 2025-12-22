//! 1. - Core moduli
//* http, assert, path, process, os....
//? http - za kreiranje i rakuvanje na server
//? assert = se koristi za testiranje i debagiranje
//? fs (fille system) - za interakcija so datotechen sistem na nashiot kompjuter (rabota so fajlovi)
//? path - so ova ja utvrduvame patekata od nashiot direktorium
//? process - process ni dava infomracii so koi procesi nashata aplikacija raboti
//? os - ni dava informacii za koj operativen sistem se naogja nashata nodejs aplikacija

//! 2. Third party moduli
//* mongoose, express. dotenv, ejs, morgan....

//! 3. - Lokalni moduli
//? Ovie moduli kje gi kreiame nie
////////////////////////////////////

//! LOKALNI MODULI

// const kalkulator = require("./kalkulator.js");
const { sobiranje, odzemanje } = require("./kalkulator");
// console.log(sobiranje, odzemanje);

const rezultat1 = sobiranje(2, 5);
console.log(rezultat1);

//todo: Da se kreira fajl so ime vaga.js
//todo: Da se eskportira funkcija koja kje pretvora gram vo kilogram i obratno
//todo: Da se esportira funckija koja kje pretvora litar vo mililitar i obratno

//? Za domasna da se dodade uste eden modul so ime domasna.js
//? koj kje ima funkcija da promeni farenhajt vo celzius i obratno
//? da ima funkcija koja sto presmetuva plostina i perimetar na pravoagolnik
//? da ima funkcija sto proveruva dali nekoj broj e paren ili neparen
