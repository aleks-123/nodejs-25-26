const http = require("http");
const url = require("url");

const handler = (req, res) => {
  console.log("server");
};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log("Server successfully started 10000");
});
