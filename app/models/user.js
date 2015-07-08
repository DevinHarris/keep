var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	username: String,
	password: String
});

module.exports = mongoose.model('User', userSchema);