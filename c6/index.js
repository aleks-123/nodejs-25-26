// http modulot kje ni ovozmozhi da kreirame http server
const http = require("http");
const url = require("url");

const handler = (req, res) => {
  console.log(req.url);
  // console.log(req.method);
  // console.log(req.headers["user-agent"]);
  // console.log(req);
  // const test = req.url.split("/");
  //  ["", "sobiranje", "2", "3"]
  const [_, op, a, b] = req.url.split("/");
  console.log(op);
  console.log(a);
  console.log(b);

  let o;

  switch (op) {
    case "sobiranje":
      o = Number(a) + Number(b);
      res.end(`${o}`);
      break;
    case "odzemanje":
      o = Number(a) - Number(b);
      res.end(`${o}`);
      break;
    case "delenje":
      o = Number(a) / Number(b);
      res.end(`${o}`);
      break;
    case "mnozenje":
      o = Number(a) * Number(b);
      res.end(`${o}`);
      break;
    default:
      res.end("Error 501");
  }
};

const server = http.createServer(handler);

server.listen(9000, (err) => {
  if (err) return console.log(err.message);
  console.log("Server successfully started 9000");
});

//? Servis koj kje obrabotuva ruti od sledniot tip
//? /ime/bojan
//? /ime/pero
//? /ime/Aleksandra
//? /ime/marija
//? /ime/risto
//? /ime/sashko

//? -> parno: da, karakteri: 5, soglaski: 2, samoglaski:3

//! Exo server
//! Kje vrakja random broj od 1 do 10
//! Kje vrakja pozddrav
