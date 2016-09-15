var express = require('express');
var routes = require('./routes');
var app = express();

app.set("view engine", "ejs");

app.set('views', __dirname + '/public');

app.use(express.static('public'));

app.get("/", routes.home);

app.get("/internet", routes.internet);

app.get("/dinner", routes.dinner);

app.get("/beer", routes.beer);

app.get("/art", routes.art);

app.get("/doc", routes.doc);

app.get("/beer_img", routes.beer_img);

app.get("/data",routes.data);
app.get("/graf",routes.graf);

app.get("*", routes.bad);


var port = 7432;

var server = app.listen(port, function(){
	console.log("Starting Server");
	console.log("__________________________________");
	console.log("Listening on port " + port);
	console.log("Visit at " + "http://localhost:" + port);
});
