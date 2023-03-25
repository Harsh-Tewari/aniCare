const mongoose = require('mongoose');

const petParent = new mongoose.Schema({
    name:{
        type:String,

    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
        
    },
    phone:{
        type:String,
        
    },
    address:{
        type:String,
        
    },
    pincode:{
        type:String,
        
    },
    hospitalBooked:{
        type:String
    },
    bookingStatus:{
        type:String
    }
})

module.exports = mongoose.model("petParent",petParent);