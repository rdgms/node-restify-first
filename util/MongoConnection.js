var mongo = require('mongodb'),  
	Server = mongo.Server,  
	Db = mongo.Db;

var object = function(){

	this.server = new Server('localhost', 27017, {auto_reconnect: true});
	this.db = new Db('exampleDb', this.server);
	
	this.getProxy = function(){
		return this.db;
	}
}

exports.object = object;


