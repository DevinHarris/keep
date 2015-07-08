var express = require('express'),
	bookmarksRouter = express.Router;

bookmarksRouter
	.route('/bookmarks')
		.get(function(req, res) {
			res.send('Bookmarks route!');
		});

module.exports = bookmarksRouter;