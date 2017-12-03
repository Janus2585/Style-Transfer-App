//this is a route specific middleware that requires the user to be logged in to proceed.
//it is included in the billingRoutes route handler
module.exports = (req, res, next) => {//next is a function called when the middleware is complete
	if (!req.user) {
		return res.status(401).send({ error: 'Please log in.' });
	}

	next();
};