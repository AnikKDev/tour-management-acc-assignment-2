const express = require('express');
const { getAllTours, addATour } = require('../controllers/tour.controller');
const router = express.Router();




router.route('/').get(getAllTours).post(addATour)

module.exports = router;