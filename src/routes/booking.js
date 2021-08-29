const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/BookingController');

router.get('/:slug', bookingController.database);
router.get('/', bookingController.index);

module.exports = router;
