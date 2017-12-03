const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');



module.exports = app => {
	app.post('/api/stripe', requireLogin, async (req, res) => {//requireLogin will be called whenever a post request is made to /api/stripe
		console.log(req.body);
		
		const charge = await stripe.charges.create({
			amount: 399,
			currency: 'usd',
			description: 'buy credits',
			source: req.body.id
		});
		console.log(charge);
		
		//when the person is signed in, we can access the current user model as req.user
		req.user.credits += 1;
		const user = await req.user.save();

		res.send(user);
	});
};