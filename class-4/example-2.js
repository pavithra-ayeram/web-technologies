const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/old'){
        res.writeHead(301, {Location: '/new'});
        res.end();
    }
    else if (req.url === '/new'){
        res.writeHead(200, {'Concent-Type': 'text/plain'});
        res.end('You are at the new page!\n');
    }
    else{
        res.writeHead(404);
        res.end('Not Found\n');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/old')
});