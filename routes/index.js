
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

exports.doc = function(req,res){
	res.render("index", {route: "doc"});
};


exports.beer_img = function(req,res){
	res.sendFile('img/beers/beer1.png', { root: "public" });
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
