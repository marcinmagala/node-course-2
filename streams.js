const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  fs.readFile("test-file.txt", (err, data) => {
    res.end(data);
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server started...");
});
