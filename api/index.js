require("dotenv").config();

let express = require("express");
let app = express();
let path = require("path");

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

publicAbsolutePath = path.join(__dirname, "..", "public");
app.use("/public", express.static(publicAbsolutePath));

homeAbsolutePath = path.join(publicAbsolutePath, "index.html");

app.get("/", (req, res) => {
  res.sendFile(homeAbsolutePath);
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "Hello json".toUpperCase() });
  } else {
    res.json({ message: "Hello json" });
  }
});

/* app.get("/", (req, res) => {
  res.send("Hello Express");
}); */

module.exports = app;
