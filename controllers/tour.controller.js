const { getAllToorsService, addATourService, getSingleTourService } = require("../services/tours.service")
const viewCount = require('../middlewares/viewCount');

module.exports.getAllTours = async (req, res, next) => {
    try {
        let querySearch = {};
        if (req.query.fields) {

            querySearch.fields = (req.query.fields).split(',').join(' ');
        }

        if (req.query.page) {
            const { page = 1, limit = 3 } = req.query;
            const skip = +(page - 1) * +limit;
            querySearch.skip = skip;
            querySearch.limit = limit;
        }
        if (req.query.sort) {
            querySearch.sort = req.query.sort
        }
        const searchAll = {};
        const result = await getAllToorsService(searchAll, querySearch);
        res.status(200).send({
            success: true,
            message: "Search successfull",
            data: result
        })
    } catch (err) {
        res.status(400).send({
            success: false,
            message: "Tours couldn't found"
        })
    }
}

module.exports.addATour = async (req, res, next) => {
    try {
        const result = await addATourService(req.body);
        res.status(200).send({
            success: true,
            message: "Search successfull",
            data: result
        })
    } catch (err) {
        res.status(400).send({
            success: false,
            message: "Something went wrong",
            data: err.message
        })
    }
}

// get single tour
module.exports.getSingleTour = async (req, res, next) => {
    try {
        const result = await getSingleTourService(req.body.id);
        res.send(result)
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        })
    }
}