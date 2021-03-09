const http = require('http');

const PORT = 7500;

const handleRequest = (request, response) => {
    response.end("Believe in the me that believes in you.");
};


const server = http.createServer(handleRequest);


server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});