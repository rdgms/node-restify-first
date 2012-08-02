var User = require('../model/User.js');

module.exports = function() {
    this.user = User();

	this.create = function(name, age, callback){
		var jsonDocument;
		this.user.validateAndInsert(
			{name: name, age: age},
			function (error, validator) {
				if (validator.hasErrors()) {
					jsonDocument = {code: '500',msg:validator.errors};
				}else {
					jsonDocument = {code: '201',msg:validator.updated_document};
				}
				callback(jsonDocument);
			}
		);
	};

	this.addPhoneByName = function(name,phone,callback){
		var response;
		this.user.validateAndUpdate(
			{name:name},{'$push': phone},
			function (error, validator) {
				if (validator.hasErrors()) {
					jsonDocument = {code: '500',msg:validator.errors};
				}else {
					jsonDocument = {code: '202',msg:validator.updated_document};
				}
				callback(jsonDocument);
			}
		);
	};
	
	this.removePhoneByName = function(name,number,callback){
		var phone = {number:number};
		var response;
		this.user.validateAndUpdate(
			{name:name},{'$pull': phone},
			function (error, validator) {
				if (validator.hasErrors()) {
					jsonDocument = {code: '500',msg:validator.errors};
				}else {
					jsonDocument = {code: '202',msg:validator.updated_document};
				}
				callback(jsonDocument);
			}
		);
	};


	this.updateByName = function(name,age,callback){
		var jsonDocument;
		this.user.validateAndUpdate(
			{name:name},{'$set': {name: name, age: age}},
			function (error, validator) {
				if (validator.hasErrors()) {
					jsonDocument = {code: '500',msg:validator.errors};
				}else {
					jsonDocument = {code: '202',msg:validator.updated_document};
				}
				callback(jsonDocument);
			}
		);
	};

	this.findByName = function(name,callback){		
		var jsonDocument;
		this.user.mongo('findOne:public', 
			{name:name}, 
			function(err,document){
				if (err != null){
					jsonDocument = {code: '404',msg:err};
				}else if (document == null){
					jsonDocument = {code: '404',msg:'Not Found'};
				}else{
					jsonDocument =  {code: '202',msg:document};
				}
				callback(jsonDocument);
			}
		);
	};

	this.removeByName = function(name,callback){
		var jsonDocument;
		this.user.mongo('remove:public', 
			{name: name}, 
			function(err){
				if (err != null){
					jsonDocument = {code: '404',msg:err};
				}else{
					jsonDocument =  {code: '202',msg:'Document deleted'};
				}
				callback(jsonDocument);
			}
		);
	};

};
