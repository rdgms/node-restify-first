var restify = require('restify');
var userAPI = require('./api/UserAPI.js');

var server = restify.createServer({
  name: 'node-restify-rdgms',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

//API
userAPI(server);


server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

