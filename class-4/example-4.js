const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url ==='/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the home page\n');
    }
    else if (req.method === 'POST' && req.url === '/submit'){
        let body = '';
        req.on('data', chunk => {body += chunk});
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`Received: ${body}\n`);
        });
    }
    else{
        res.writeHead(404, {'Content=Type':'text/plain'});
        res.end('Not Found\n');
    }
});


server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
