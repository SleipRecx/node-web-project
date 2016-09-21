//All requirements for the node.js app
var express = require('express');
var routes = require('./routes');
var favicon = require('serve-favicon');
var app = express();
//Defines view engine jo ejs
app.set("view engine", "ejs");
// sets view path to current directory +/public
app.set('views', __dirname + '/public');
//Sets the path to all static GET methods to publiv
app.use(express.static('public'));
// sets the favicon
app.use(favicon(__dirname + '/public/img/favicon.ico'));


//<------------------------------------------->
// All the routes we are using
// Includes a default Bad Route if no route matches.
app.get("/", routes.home);

app.get("/internet", routes.internet);

app.get("/dinner", routes.dinner);

app.get("/beer", routes.beer);

app.get("/sushi", routes.sushi);

app.get("/art", routes.art);

app.get("/doc", routes.doc);

app.get("/random_beer", routes.random_beer);

app.get("/random_armor", routes.random_armor);

app.get("/film", routes.film);

app.get("/data",routes.data);

app.get("/graf",routes.graf);

app.get("*", routes.bad);
//<---------------------------------------------------------------->

// defines the port
var port = 80;
// starting the actual express server
var server = app.listen(port, function(){
	console.log("Starting Server");
	console.log("Listening on port " + port);
});
