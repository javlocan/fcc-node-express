require("dotenv").config();

let express = require("express");
let app = express();

publicAbsolutePath = __dirname + "/public";
app.use("/public", express.static(publicAbsolutePath));

homeAbsolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  res.sendFile(homeAbsolutePath);
});

app.get("/json", (req, res) => {
  console.log("Env: ", process.env.MESSAGE_STYLE);
  process.env.MESSAGE_STYLE === "uppercase"
    ? res.json({ message: "HELLO JSON" })
    : res.json({ message: "Hello json" });
});

/* app.get("/", (req, res) => {
  res.send("Hello Express");
}); */

module.exports = app;
