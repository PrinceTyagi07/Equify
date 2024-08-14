const mongoose = require('mongoose');
const positionSchema =new mongoose.Schema({
    product:{
        type:String,
    },
    name:{
        type:String,
    },
    qty:{
        type:Number,
    },
    price:{
        type:Number,
    },
    net:{
        type:String,
    },
    day:{
        type:String,
    },
    isLoss:{
        Boolean,
    }
})