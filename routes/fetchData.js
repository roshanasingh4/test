const express = require("express");
const { db } = require("../model/pushDataModel");
const Notes = require("../model/pushDataModel");
const router = express.Router();

//fetches data by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  //fetch data from database
  const data = await Notes.findOne({ id: id });

  //error if no data found
  if (data) {
    res.json(data);
  } else {
    res.send({
      status: 404,
      message: "Not found",
    });
  }
});
//fetch all data
router.get("/", async (req, res) => {
  await Notes.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

module.exports = router;
