const express = require("express");
const body_parser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(cors({
    origin: "*"
}));

app.use(body_parser.json());
const paymentRoute = require("./server");
app.use('/api', paymentRoute);

app.listen(5000);
