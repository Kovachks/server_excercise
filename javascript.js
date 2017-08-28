var http = require("http");

var PORT = 7000;

var PORT2 = 7500;

function goodRequest(request, response) {
	response.end("You've come such a long way in this coding bootcamp.  Keep it up!")
}

function badRequest(request, response) {
	response.end("You don't code 24 hours a day!")
}

var server = http.createServer(goodRequest);

var server2 = http.createServer(badRequest);

server.listen(PORT, function() {
	console.log("Server listening on: http://localhost:" + PORT)
})

server2.listen(PORT2, function() {
	console.log("Server listening on: http://localhost:" + PORT2)
})