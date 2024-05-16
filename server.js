const compression = require("compression");
const express = require("express");
const dotenv = require("dotenv");

const PORT = 5555;

dotenv.config();
const parser = express.json();
function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    return false;
  }
  return compression.filter(req, res);
}

const app = express();
app.disable("x-powered-by");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers,Access-Control-Allow-Origin,Origin,Access-Control-Allow-Methods,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization,x-org-id,x-project-id"
  );
  next();
});
app.use(parser);

app.use(compression({ filter: shouldCompress }));

app.get("/", (req, res) => {
  console.log("Sending the index.html file");
  res.sendfile("./dist/index.html");
});

app.get("/first-project.web-app.js", (req, res) => {
  console.log("Sending the web-app");
  res.sendfile("./dist/first-project.web-app.js");
});

app.use(express.static("public", { redirect: false, maxAge: "36000000" }));

app.use((req, res) => {
  console.log("Sending the index.html file");
  res.sendfile("./dist/index.html");
});

app.listen(PORT, () => console.log(`UI listening at http://localhost:${PORT}`));
