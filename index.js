//require is used here because node does not support import-from syntax
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//because we are not assigning a variable to services/passport.js, we can just write the following. this executes immediately
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
require('./routes/billingRoutes')(app);

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

//bind the routes in authRoutes to app
authRoutes(app);//this could also be written as require('./routes/authRoutes')(app)



//dynamic port binding
//in production use the Heroku determined port, in development default to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);