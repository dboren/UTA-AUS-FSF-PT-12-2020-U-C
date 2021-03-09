const http = require('http');

const PORT = 7000;

const handleRequest = (request, response) => {
    response.end("Women hold up half the sky.");
};


const server = http.createServer(handleRequest);


server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});