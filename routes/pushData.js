const express = require('express');
const router = require('./fetchData');
let Notes = require('../model/pushDataModel');
const { body, validationResult } = require('express-validator');

router.post("/", [
    body('userId', 'please enter at least 1 character').isLength({ min: 1 }),
    body('id', 'please enter at least 1 character').isLength({ min: 1 }),
    body('title', 'please enter at least 1 character').isLength({ min: 1 }),
    body('body', 'please enter at least 1 character').isLength({ min: 1 })
] ,async(req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        let notes = await Notes.findOne({ id: req.body.id });
        if (notes) {
            return res.status(400).json({ error: "Sorry a note with this id already exists" });
          }

    notes = await Notes.create({
        userId: req.body.userId,
        id: req.body.id,
        title: req.body.title,
        body: req.body.body
    });

    res.json("Notes Added Successfully")
        
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");       
}
})

module.exports = router;