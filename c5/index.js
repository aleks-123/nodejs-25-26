//JSON - JavaScript Object Notation

const readWrite = require("./readWrite.js");

(async () => {
  try {
    const dataString = await readWrite.fileRead("studenti.json");
    const studenti = JSON.parse(dataString);
    const sortiranjeProsek = studenti.sort((a, b) => {
      if (a.prosek > b.prosek) {
        return -1;
      } else if (a.prosek < b.prosek) {
        return 1;
      }
      return 0;
    });

    //? student so najvisok prosek
    const najvisokProsek = sortiranjeProsek[0];
    //? student so najnizok prosek
    const najnizokProsek = sortiranjeProsek[sortiranjeProsek.length - 1];
    console.log(najnizokProsek, najvisokProsek);

    const sredenProsek =
      studenti.reduce((prev, cur) => {
        return cur.prosek + prev;
      }, 0) / studenti.length;
    console.log(sredenProsek);
  } catch (err) {}
})();

//? json fajl so studen [reden broj ,ime, prezime, prosek, grad]
//? Додавање на студент во фајлот
//? бришење на стгудентот од фајлот
//? менување на податоци на студент од фајлот
//? читњае на сите студенти од фајлот

//? - Треба да додадеме студент во фајлот
//? 1. Да ја вцчитаме целата содржина од фајлот | fs.readFile
//? 2. Да ја конвертираме соджината од обичен текст во js низа\објект | JSON.parse
//? 3. Треба да ги додадете податоците на студентот во низата | Array.push
//? 4. Низата од ЈС низа\објект треба да биде конвертирана во текст | JSON.stringify
//? 5. Текстот треба да биде зачуван во фајлот | fs.writeFile

//? - Името на студентот треба да биде сменето од ААА во ААБ
//? 1. Да ја вчитаме целата соджина од фајлот | fs.readFile
//? 2. Да ја конвертирате соджината од обичен текст во јс низа | JSON.parse
//? 3. Да ги изминиме сите елементи во низата и да направиме промена само на соодветнион член | Array.map
//? 4. Низата од јс низа треба да биде конвертирана во текст | JSON.strngify
//? 5. Текстот треба да биде зачуван во фајл | fs.writeFile

//? - Треба да се избрише студент од фајлот
//? 1. Да ја вчитаме целата содржина од фајлот
//? 2. Да ја конвертираме или парсираме содржината од фајлот
//? 3. Може да избришиме соодветен член од низата
//? 4. Да ја конвертираме назад во ЈСОН или стринг
//? 5. Да го зачуваме самиот податок\фајл
