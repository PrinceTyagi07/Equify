const mongoose = require('mongoose');

const holdingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
    },
    avg: {
        type: Number
    },
    price: { 
        type: Number
     },

    net:{
        type: String
    },
    day:{
        type:String
    }
});
module.exports =mongoose.model("HoldingSchema",holdingSchema)