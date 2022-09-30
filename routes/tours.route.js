const express = require('express');
const app = require('../app');
const { getAllTours, addATour, getSingleTour } = require('../controllers/tour.controller');
const viewCount = require('../middlewares/viewCount');
const router = express.Router();




router.route('/').get(getAllTours).post(addATour);


router.route('/tour-detail').get(getSingleTour)

// get specific tours

module.exports = router;