const express = require('express');
const { getAllTours, addATour, getSingleTour } = require('../controllers/tour.controller');
const router = express.Router();




router.route('/').get(getAllTours).post(addATour);
router.route('/tour-detail').get(getSingleTour)

// get specific tours

module.exports = router;