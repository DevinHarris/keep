var config = require('./config'),
	express = config.express,
	app = express(),
	port = config.port;


mongoose.connect('mongodb://localhost:27017/bookmarks');

app.get('/', function(req, res) {
	res.send("Hello World!");
});

app.listen(8080);

console.log("Magic app running on", port);