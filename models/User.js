const mongoose = require('mongoose');

const { Schema } = mongoose;//can also be written as const Schema = mongoose.Schema;

const userSchema = new Schema({
	googleId: String,
	email: Array,
	Subscribed: Boolean
});

mongoose.model('users', userSchema)