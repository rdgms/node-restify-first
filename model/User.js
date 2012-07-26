var mongodb = require('../util/MongoConnection.js');

module.exports = function () {
	var User = require('mongolia').model(mongodb.getConnection(), 'user');
	
	User.namespaces = {
		public: ['name', 'age'],
		private: { extend: 'public', add: ['_id']}
	};
	
	User.validate = function (query, update, callback) {
		var validator = require('mongolia').validator(query, update);
		validator.validateRegex({
			name: [/.{1,200}/, 'Incorrect name'],
			age: [/.{1,200}/, 'Incorrect age'],
		});
    	callback(null, validator);
  	};

  return User;
};

