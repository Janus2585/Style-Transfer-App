const mongoose = require('mongoose');

const { Schema } = mongoose;//can also be written as const Schema = mongoose.Schema;

const userSchema = new Schema({
	googleId: String,
	email: Array,
	//subscription: { type: String, default: 'Free' }
	credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema)