// Server -- Main entry point for all things routing
const http = require('http');
const router = require('./router'); 

const PORT = 3000;

const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});