const mongoose = require('mongoose');

const puppyUser = new mongoose.Schema({
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
        
    }
})

module.exports = mongoose.model("puppyUser",puppyUser);