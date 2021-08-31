class SiteController {
	//[GET] /
	home(req, res) {
		res.render('home');
	}
	login(req, res) {
		res.render('login', { message: req.flash('loginMessage') });
	}
	signup(req, res) {
		res.render('signup', { message: req.flash('signupMessage') });
	}
	profile(req, res) {
		res.render('profile', {
			user: req.user, // Lấy thông tin user trong session và truyền nó qua template
		});
	}
	logout(req, res) {
		req.logout();
		res.redirect('/');
	}
}

module.exports = new SiteController();
