const mongoose = require("mongoose");

const activity__Schema =  mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRv8PgcJt-qMm5uFb0BjXsSC_1kzhc4Xl0Bg&usqp=CAU"
    },
    Street: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Zipcode: {
        type: Number,
        required: true
    },
    District: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true
    },
    Mode:{
        type: String,
        required: true
    },
    charge: {
        type: Number,
        required: false,
        default: 0
    },
    EstablishmentID: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("activities__list", activity__Schema);