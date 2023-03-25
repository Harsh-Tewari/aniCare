const mongoose = require('mongoose');

const puppyFarmAdd = new mongoose.Schema({
    breed:{
        type:String,

    },
    certificate:{   
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:String,
        
    },
    gender:{
        type:String,
        
    },
    id:{
        type:String,
        
    },
    isBreeding:{
        type:Boolean,
        
    },
    breedId:{
        type:String,
    },
    count:{
        type:Number,
        
    },
    dateOfExpiry:{
        type:String
    }
})

module.exports = mongoose.model("puppyFarmAdd",puppyFarmAdd);