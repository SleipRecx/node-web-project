var express = require('express');
var routes = require('./routes');
var app = express();

app.set("view engine", "ejs");

app.locals.pageTitle = "Exercise 2";

app.get("/", routes.default);

app.get("/about", routes.about);

app.get("*", routes.bad);

var port = 7432;

var server = app.listen(port, function(){
	console.log("Starting Server");
	console.log("__________________________________");
	console.log("Listening on port " + port);
	console.log("Visit at " + "http://localhost:" + port);
});
