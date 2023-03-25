const mongoose = require('mongoose');

const govLogin = new mongoose.Schema({

    email:{
        type:String,
        
    },
    password:{
        type:String,
        
    }
})

module.exports = mongoose.model("govLogin",govLogin);