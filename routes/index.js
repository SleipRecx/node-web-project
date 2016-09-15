
exports.home = function(req,res){
	res.render("index", {route: "home"});
};

exports.internet = function(req,res){
	res.render("index", {route: "internet"});
};

exports.dinner = function(req,res){
	res.render("index", {route: "dinner"});
};

exports.beer = function(req,res){
	res.render("index", {route: "beer"});
};

exports.sushi = function(req,res){
	res.render("index", {route: "sushi"});
=======
exports.film = function(req,res){
	res.render("index", {route: "film"})
};

exports.doc = function(req,res){
	res.render("index", {route: "doc"});
};

exports.art = function(req,res){
    res.render("index", {route: "art"});
};

exports.random_beer = function(req,res){
	console.log(req.params.current)
	var random = Math.floor((Math.random() * 8) + 1);
	var src = "img/beers/beer" + random.toString() + ".png";
	res.send(src);
=======
exports.beer_img = function(req,res){
	res.sendFile('img/beers/beer1.png', { root: "public" });
>>>>>>> stian
};

exports.data=function(req,res){
res.sendFile("kaText1.txt",{root: "public"});
};
exports.graf=function(req,res){
res.send("../img/internet/xkcdgrapf.png");
};

exports.bad = function(req,res){
	res.send("Bad Route");
};
