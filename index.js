//app index
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const routes = require('./src/routes');
const db = require('./src/models');

//app setting
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'src/public')));
app.listen(port, () => {
	console.log(`Server is runing on http://localhost:${port}`);
});

//dev
const morgan = require('morgan');
app.use(morgan('dev'));

//router
routes(app);
db.connect();
