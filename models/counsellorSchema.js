const mongoose = require("mongoose");

const counsellors__Schema =  mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNqV9kYuWdMaU6BeBy43eiJE2EqVNEYHXjw&usqp=CAU"
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
    MeetLink:{
        type: String,
        required: false
    },
    MedicalLicense:{
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model("counsellors__list", counsellors__Schema);