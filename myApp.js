let express = require("express");
let app = express();

publicAbsolutePath = __dirname + "/public";
app.use("/public", express.static(publicAbsolutePath));

homeAbsolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  res.sendFile(homeAbsolutePath);
});

/* app.get("/", (req, res) => {
  res.send("Hello Express");
}); */

module.exports = app;
