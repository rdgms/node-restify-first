var assert = require("assert")
var UserController = require('../controller/UserController.js');

describe('User Controller', function(){

	describe('#create', function(){
		it('should return code 201 when parameters are correct', function(){
			var controller = new UserController();
			controller.create("Rodrigo M Silva", "22",function(document){
				assert.equal("201", document.code);	
			});
		});
		it('should return code 500 when parameters are incorrect', function(){
			var controller = new UserController();
			controller.create("", "",function(document){
				assert.equal("500", document.code);	
			});
		});
	});

	describe('#removeByName', function(){
		it('should return code 202 when parameters are correct and document exist', function(){
			var controller = new UserController();
			controller.removeByName("Rodrigo M Silva",function(document){
				assert.equal("202", document.code);	
			});
		});
	});

	describe('findByName', function(){
		it('should return code 202 when parameters are correct and document exists', function(){
			var controller = new UserController();
			controller.findByName("Rodrigo M Silva",function(document){
				assert.equal("202", document.code);	
			});
		});
		it('should return code 412 when parameters are incorrect', function(){
			var controller = new UserController();	
			controller.findByName("Wrong parameter",function(document){
				assert.equal("412", document.code);	
			});
		});
	});

	describe('#updateByName', function(){
		it('should return code 201 when parameters are correct', function(){
			var controller = new UserController();
			controller.updateByName("Rodrigo M Silva", "22",function(document){
				assert.equal("202", document.code);	
			});
		});

		it('should return code 500 when parameters are incorrect', function(){
			var controller = new UserController();
			controller.updateByName("", "",function(document){
				assert.equal("500", document.code);	
			});
		});
	});


});

