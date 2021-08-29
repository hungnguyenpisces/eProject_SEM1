//models index
const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/eProject_SEM1');
		console.log('Database connected!');
	} catch (error) {
		console.log('Database connect falure!!!');
	}
}

module.exports = { connect };
