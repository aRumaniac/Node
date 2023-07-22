const mongoose = require("mongoose");

const feedback__Schema =  mongoose.Schema({
    feedback_id: {
        type: String,
        required: true
    },
    booked: {
        type: String,
        require: false
    },
    rating: {
        type: Number,
        required: true,
        default: 3
    },
    comment:{
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("feedback__list", feedback__Schema);