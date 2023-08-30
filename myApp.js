let express = require("express");

let app = express();

homeAbsolutePath = __dirname + "/views/index.html";
publicAbsolutePath = __dirname + "/public";

app.get("/", (req, res) => {
  res.sendFile(homeAbsolutePath);
});

app.use(express.static(publicAbsolutePath));

/* app.get("/", (req, res) => {
  res.send("Hello Express");
}); */

module.exports = app;
