let express = require("express");
let app = express();

homeAbsolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(homeAbsolutePath);
});
app.get("/", (req, res) => {
  res.send("Hello Express");
});

module.exports = app;
