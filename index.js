//app index
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
const routes = require('./src/routes');
const db = require('./src/models');

//app setting
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'src/public')));

//dev
const morgan = require('morgan');
app.use(morgan('dev')); // log tất cả request ra console log
// cài đặt ứng dùng express
app.use(cookieParser()); // đọc cookie (cần cho xác thực)
app.use(bodyParser()); // lấy thông tin từ html forms

// các cài đặt cần thiết cho passport
app.use(session({secret: 'infinitycoder'})); // chuối bí mật đã mã hóa coookie
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


//router
routes(app, passport);
//database
db.connect();

app.listen(port, () => {
	console.log(`Server is runing on http://localhost:${port}`);
});