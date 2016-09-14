
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

exports.data=function(req,res){
res.sendFile("stuff.txt",{root: "public"});
};

exports.bad = function(req,res){
	res.send("Bad Route");
};
