const passport = require('passport');

//app is the argument of the arrow function because we want to bind the route handlers to app
module.exports = app => {
	app.get('/auth/google', 
		passport.authenticate('google', {
		  scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', 
		passport.authenticate('google', {

		})
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
