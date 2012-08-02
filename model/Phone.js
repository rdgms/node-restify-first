var mongodb = require('../util/MongoConnection.js');

module.exports = function () {
	var Phone = require('mongolia').model(mongodb.getConnection(), 'Phone');
	
	Phone.namespaces = {
		
	};
	
  return Phone;
};

