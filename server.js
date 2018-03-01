/*
    Al Curry   March 1, 2018

    GWU Full Stack web development bootcamp

    a straightforward node js example running 2 servers

    port 7000 -- say something good
    port 7500 -- say something bad

    to run from the command line:
       node server.js
    to see good on the browser : 
       navigate to localhost:7000
    to see bad on the browser : 
       navigate to localhost:7500

*/

const http = require("http");
const port1 = 7000;
const port2 = 7500;

function handleRequest1(request, response) {
    response.end(" something GOOD - route hit: " + request.url);
}
function handleRequest2(request, response) {
    response.end(" something BAD - route hit: " + request.url);
}

const server1 = http.createServer(handleRequest1);

server1.listen(port1, function () {
    console.log("Server listening on : http://localhost:%s", port1);
});

const server2 = http.createServer(handleRequest2);

server2.listen(port2, function () {
    console.log("Server listening on : http://localhost:%s", port2);
});