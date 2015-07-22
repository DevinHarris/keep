var express = require('express'),
	app = express(),
	bookmarksRouter = express.Router(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	Bookmark = require('../models/bookmark');

app
	.route('/bookmark')
		.get(function(req, res) {
			res.json({message: "Bookmarks route!"});
		})

		.post(function(req, res) {
			var bookmark = new Bookmark();
			name = req.body.name;
			url = req.body.url;
			date = new Date();

			bookmark.save(function(err) {
				if (err) console.log(err);

				return res.json({message: 'Bookmark created!'});
			});
		});

module.exports = app;