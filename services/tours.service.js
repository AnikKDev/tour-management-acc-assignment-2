const Tours = require("../models/Tours")

module.exports.getAllToorsService = async (data) => {
    const result = await Tours.find({});
    return result;
}
// add a tour
module.exports.addATourService = async (data) => {
    const result = await Tours.create(data);
    return result;
}