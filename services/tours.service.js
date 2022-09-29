const Tours = require("../models/Tours")

module.exports.getAllToorsService = async (data, query) => {
    // console.log(query)
    const { fields, limit, skip } = query;
    console.log(query.sort)
    const result = await Tours.find({})
        .select(fields)
        .skip(skip)
        .limit(limit)
        .sort(query.sort)
    const totalTourLength = await Tours.countDocuments({});
    const pageCount = Math.ceil(totalTourLength / limit);
    // console.log(totalTourLength)
    return { result, pageCount };
}
// add a tour
module.exports.addATourService = async (data) => {
    const result = await Tours.create(data);
    return result;
};

// single tour
module.exports.getSingleTourService = async (id) => {
    console.log(id)
    const result = await Tours.findOne({ _id: id });
    return result;
}