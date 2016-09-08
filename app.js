var express = require('express');
var routes = require('./routes');
var app = express();

app.set("view engine", "ejs");

app.set('views', __dirname + '/public/html');

app.get("/", routes.default);

app.get("*", routes.bad);

var port = 7432;

var server = app.listen(port, function(){
	console.log("Starting Server");
	console.log("__________________________________");
	console.log("Listening on port " + port);
	console.log("Visit at " + "http://localhost:" + port);
});
