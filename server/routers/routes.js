const express = require("express");
const router = new express.Router();

router.get("", (req, res) => {
  res.render("index.html");
});

router.get("/data", (req, res) => {
  res.json({ data: "working well" });
});

module.exports = router;
