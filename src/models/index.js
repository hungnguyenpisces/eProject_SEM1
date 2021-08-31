//models index
const mongoose = require('mongoose');

function connect() {
	mongoose
		.connect(
			'mongodb://localhost:27017/test',
			// 'mongodb+srv://eprojs1:Jv3g13830@cluster0.an6x9.mongodb.net/test',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		.then(() => console.log('Database connected!'))
		.catch((err) => console.log(err));
}

module.exports = { connect };
