const Booking = require('../models/bookings');

class BookingController {
	//[GET] /booking
	index(req, res) {
		res.render('booking');
	}
	database(req, res, next) {
		Booking.find({})
			.then((bookings) => res.json(bookings))
			.catch(next);
	}
}

module.exports = new BookingController();
