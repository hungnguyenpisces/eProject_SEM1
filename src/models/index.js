const mongoose = require('mongoose');
// const mongooseDelete = require('mongoose-delete');

//Connect to DB
function connect() {
	mongoose
		.connect(
			'mongodb+srv://lenn:1234@cluster0.dbox4.mongodb.net/hair_care?retryWrites=true&w=majority',
			// 'mongodb://localhost:27017/test',

			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		.then(() => console.log('Database connected!'))
		.catch((err) => console.log(err));
}

module.exports = { connect };
