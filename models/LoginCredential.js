const mongoose = require("mongoose");

const counsellor__info__Schema =  mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("counsellor__info__list", counsellor__info__Schema);