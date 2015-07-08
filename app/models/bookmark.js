var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var bookmarkSchema = new Schema({
	name: String,
	url: String,
	date: Date
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);