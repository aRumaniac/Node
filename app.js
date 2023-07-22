const express = require("express");
const body_parser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const PORT = process.env.PORT || 5000
require('dotenv/config');

const app = express();
app.use(cors({
    origin: "*"
}));
app.use(body_parser.json());

// PAYMENT

// CONNECT DB
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}).then(()=>{
    console.log("CONNECTION SUCCESSFUL");
}).catch(err =>{
    console.log(err);
})

// MIDDDLEWARE
const contentRoute = require("./Routes/content");
app.use('/api/contents', contentRoute);
const MentaltRoute = require("./Routes/Mental");
app.use('/api/Mentals', MentaltRoute);
const counsellorRoute = require("./Routes/counsellor");
app.use('/api/counsellors', counsellorRoute);
const activityRoute = require("./Routes/activity");
app.use('/api/activities', activityRoute);
const bookingRoute = require("./Routes/booking");
app.use('/api/bookings', bookingRoute);
const feedbackRoute = require("./Routes/feedback");
const ServerlessHttp = require("serverless-http");
app.use('/api/feedbacks', feedbackRoute);

// listening to the server
app.listen(PORT);