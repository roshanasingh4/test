const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.mongoURI

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true } , ()=>{
        console.log("Connected to mongo successfully")
    })
}

module.exports = connectToMongo;