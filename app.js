/* // Bringing in all the dependencies and config

var config = require('./config'),
	express = config.express,
	app = express(),
	Router = express.Router,
	userRoute = require('./routes/user'),
	bookmarkRoute = require('./routes/bookmarks'),
	mongoose = require('mongoose'),
	port = config.port,
	bodyParser = config.bodyParser,
	morgan = config.morgan;


// Connecting to the database, plus a callback function to let us know if there are any errors

mongoose.connect('mongodb://localhost/27017/Keep', function(err) {
	if (err) {
		console.error(err);
	} else {
		console.info('Successfully connected to the database!');
	}
});

// Some app setup

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Our application routes

app.use('/bookmark', bookmarkRoute);
app.use('/user', userRoute);

app.get('/', function(req, res) {
	res.json({message: "Welcome!"});
});

// Listening on port 8080

app.listen(port, function() {
	console.log('App listening on port ', port);
});


	*/