var mongo = require('mongodb'),  
			Server = mongo.Server,  
			Db = mongo.Db;

exports.getConnection = function() {
	var server = new Server('localhost', 27017, {auto_reconnect: true});
	var db = new Db('testDB',server);

	return db;
};

