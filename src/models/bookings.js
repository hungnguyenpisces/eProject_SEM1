const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Booking = new Schema({
	title: String,
	body: String,
	date: Date,
});

module.exports = mongoose.model('Booking', Booking);
