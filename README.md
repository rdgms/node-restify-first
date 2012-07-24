First NodeJS + Restify Application

CURL:

curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d ' {"user":{"name":"Rodrigo M Silva","age":"15"}}'  http://localhost:8080/user

curl -v -H "Accept: application/json" -H "Content-type: application/json" -X PUT -d ' {"user":{"name":"Rodrigo Mendes Silva","age":"50"}}'  http://localhost:8080/user

curl -v  -X GET  http://localhost:8080/user/Rodrigo%20M%20Silva

curl -v  -X DELETE  http://localhost:8080/user/Rodrigo%20M%20Silva
