
exports.default = function(req,res){
	res.render("index", {route: "/"});
};

exports.bad = function(req,res){
	res.send("Bad Route");
};
