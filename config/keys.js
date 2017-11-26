//keys.js
if (process.env.NODE_ENV === 'production') {
	//app is in production
	module.exports = require('./prod');
} else {
	//app is in development
	module.exports = require('./dev');
}