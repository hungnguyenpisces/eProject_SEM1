const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController.js');

router.get('/logout', siteController.logout);
router.get('/profile', isLoggedIn, siteController.profile);
router.get('/signup', siteController.signup);
router.get('/login', siteController.login);
router.get('/', siteController.home);

// route middleware để kiểm tra một user đã đăng nhập hay chưa?
function isLoggedIn(req, res, next) {
	// Nếu một user đã xác thực, cho đi tiếp
	if (req.isAuthenticated()) return next();
	// Nếu chưa, đưa về trang chủ
	res.redirect('/');
}
module.exports = router;
