const { getAllToorsService, addATourService } = require("../services/tours.service")


module.exports.getAllTours = async (req, res, next) => {
    try {
        const result = await getAllToorsService();
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