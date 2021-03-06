var UserController = require('../controller/UserController.js');

module.exports = function(server) {
	var controller = new UserController();
	
	server.post('/user', function create(req, res, next) {
		controller.create(req.params.user.name,req.params.user.age,function(document){
			res.send(document.code,document.msg);
		});

		return next();
	});

	server.put('/user', function update(req, res, next) {
		controller.updateByName(req.params.user.name,req.params.user.age,function(document){
			res.send(document.code,document.msg);
		});

		return next();
	});


	server.post('/user/:name/addphone', function addPhone(req, res, next) {
		try{
			controller.addPhoneByName(req.params.name,req.params.phone,function(document){
				res.send(document.code,document.msg);
			});
		}catch(err){
			res.send(500,err);
		}

		return next();
	});

	server.del('/user/:name/removephone/:number', function addPhone(req, res, next) {
		try{
			controller.removePhoneByName(req.params.name,req.params.number,function(document){
				res.send(document.code,document.msg);
			});
		}catch(err){
			res.send(500,err);
		}

		return next();
	});


	server.get('/user/:name', function find(req, res, next) {
		controller.findByName(req.params.name,function(document){
			res.send(document.code,document.msg);
		});

		return next();
	});

	server.del('/user/:name', function del(req, res, next) {
		controller.removeByName(req.params.name,function(document){
				console.log(document.msg);
				res.send(document.code,document.msg);
		});

		return next();
	});

};
