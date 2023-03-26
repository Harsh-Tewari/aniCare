const mongoose = require('mongoose');

const hospitalRating = new mongoose.Schema({

   name:{
        type:String,
        
    },
    rating:{
        type:String
    },
    services:{
        type:String
    },
    pincode:{
        type:String
    },
    address:{
        type:String
    },
    homeVisit:{
        type:String
    },
    contact:{
        type:String
    }
})

module.exports = mongoose.model("hospitalRating",hospitalRating);