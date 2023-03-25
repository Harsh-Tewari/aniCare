const mongoose = require('mongoose');

const puppyBreed = new mongoose.Schema({
    maleId:{
        type:String,

    },
    femaleId:{
        type:String
    },
    dateOfexpiry:{
        type:String
    }
})

module.exports = mongoose.model("puppyBreed",puppyBreed);