//routes index
const bookingRouter = require('./booking');
const siteRouter = require('./site');

function routes(app) {
	app.use('/booking', bookingRouter);

	app.use('/', siteRouter);
}

module.exports = routes;
