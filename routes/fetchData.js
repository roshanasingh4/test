const express = require("express");
const { db } = require("../model/pushDataModel");
const Notes = require("../model/pushDataModel");
const router = express.Router();

//fetches data by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Notes.find({ id: id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});
//fetch all data
router.get("/", (req, res) => {
  Notes.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

module.exports = router;
