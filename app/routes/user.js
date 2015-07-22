var express = require('express'),
	userRouter = express.Router();


userRouter
	.route('/user')
		.get(function(req, res) {
			res.send('User route!');
		});

module.exports = userRouter;