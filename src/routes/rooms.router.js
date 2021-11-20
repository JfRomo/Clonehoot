const express = require("express");
const router = express.Router();
const path = require("path");

const fs = require("fs");
let rawdata = fs.readFileSync(path.join(__dirname, "../utils/db.json"));
let db = JSON.parse(rawdata);

router.get("/", (req, res) => {
  const user = {
    name: "Fernando",
  };
  res.render("rooms", { title: "Salas de: " + user.name });
});

router.get("/list", (req, res) => {
  const rooms = db.rooms;
  res.status(200).json({ rooms });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const room = db.rooms.filter((e) => {
    return e.id === id;
  })[0];
  
  res.status(200).json({room});
});

module.exports = router;
