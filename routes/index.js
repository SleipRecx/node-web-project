
exports.default = function(req,res){
	res.render("default", {route: "/"});
};

exports.about = function(req,res){
	res.render("default", {route: "about", pageTitle: "About"});
};

exports.bad = function(req,res){
	res.send("Bad Route");
};
