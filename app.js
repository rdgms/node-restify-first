//INCLUDES
var restify = require('restify');
var User = require('./model/User.js');

// MONGO DB CONFIGURATION
var mongo = require('mongodb'),  
	Server = mongo.Server,  
	Db = mongo.Db;

var serverdb = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('dbTest', serverdb);

//SERVER CONFIGURATION
var server = restify.createServer({
  name: 'node-restify-rdgms',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

//USER API
server.post('/user', function create(req, res, next) {
	User(db).validateAndInsert(
		{name: req.params.user.name, age: req.params.user.age},
		function (error, validator) {
			if (validator.hasErrors()) {
				console.log(validator.errors);
				res.send(500, {code: '002',message:validator.errors});
			}else {
				res.send(201, {code: '001',message:validator.updated_document});
			}
		}
	);
	return next();
});

server.put('/user', function update(req, res, next) {
		User(db).validateAndUpdate(
		{name: req.params.user.name}, {'$set': {name: req.params.user.name, age: req.params.user.age}},
		function (error, validator) {
			if (validator.hasErrors()) {
				console.log(validator.errors);
				res.send(500, {code: '002',message:validator.errors});
			}else {
				res.send(202, {code: '001',message:validator.updated_document});
			}
		}
	);

	return next();
});

server.get('/user/:id', function find(req, res, next) {
	User(db).mongo('findOne:public', {name: req.params.id}, function(err,response){
		res.send(202,response);

	});
	return next();
});

server.del('/user/:id', function del(req, res, next) {
	User(db).mongo('remove:public', {name: req.params.id}, function(err,response){
		res.send(202,response);
	});

	return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});




