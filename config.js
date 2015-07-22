var config = {
	port: process.env.PORT || 8080,
	express: require('express'),
	bodyParser: require('body-parser'),
	morgan: require('morgan')
};

module.exports = config;

