const path = require("path");
const express = require("express");
const routes = require("./routers/routes");

const app = express();
const port = process.env.PORT || 5000;

// const publicDirectoryPath = path.join(__dirname, "../public");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
