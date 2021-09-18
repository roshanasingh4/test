const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
    userId:{
        type: Number,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Notes = mongoose.model('notes', notesSchema);
module.exports = Notes