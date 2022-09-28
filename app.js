const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

const tourRoutes = require('./routes/tours.route');

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});

app.use('/api/v1/tours', tourRoutes)

module.exports = app;