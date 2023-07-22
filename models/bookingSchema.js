const mongoose = require("mongoose");

const booking__Schema =  mongoose.Schema({
    booking_id: {
        type: String,
        required: true
    },
    booked: {
        type: String,
        require: false
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("booking__list", booking__Schema);