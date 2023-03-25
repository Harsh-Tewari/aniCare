const mongoose = require('mongoose');

const hospitalRating = new mongoose.Schema({

    email:{
        type:String,
        
    },
    rating:{
        type:String
    },
    totalRater:{
        type:Number
    }
})

module.exports = mongoose.model("hospitalRating",hospitalRating);