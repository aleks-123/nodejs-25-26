//? Servis koj kje obrabotuva ruti od sledniot tip
//? /ime/bojan
//? /ime/pero
//? /ime/Aleksandra
//? /ime/marija
//? /ime/risto
//? /ime/sashko

//? -> parno: da, karakteri: 5, soglaski: 2, samoglaski:3

const http = require("http");

const server = http.createServer((req, res) => {
  const [_, path, name] = req.url.split("/");

  if (!name) {
    res.end("Pogresno url");
    return;
  }

  const brojNaBukvi = name.length;
  const eParen = brojNaBukvi % 2 === 0 ? "da" : "ne";

  const bukviArray = name.split("");
  const samoglaski = ["a", "e", "i", "o", "u"];
  let samoglaskiBroj = 0;

  for (let i = 0; i < bukviArray.length; i++) {
    if (samoglaski.includes(bukviArray[i])) {
      samoglaskiBroj++;
    }
  }

  const soglaskiBroj = brojNaBukvi - samoglaskiBroj;

  res.end(`parno: ${eParen}, karakteri:${brojNaBukvi}, soglaski:${soglaskiBroj}, samoglaski:${samoglaskiBroj}`);
});

const port = 10000;
server.listen(port, (err) => {
  if (err) console.log(err.message);
  console.log(`Server successfully started on port ${port}`);
});
