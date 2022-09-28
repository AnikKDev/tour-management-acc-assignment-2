const mongoose = require('mongoose');
const { Schema } = mongoose;

const toursSchema = new Schema({
    name: {
        type: String,
        require: [true, "Name required"]
    },
    price: {
        type: Number,
        min: [0, "Price needs to be a valid number"],
        required: [true, "Price required"]
    },
    details: {
        type: String,
        required: [true, "Description required"]
    }
})

// model
const Tours = mongoose.model('Tours', toursSchema);

module.exports = Tours;