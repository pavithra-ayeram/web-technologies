const fs = require('fs');
const path = require('path');

const homeHandler = require('./handlers/homeHandler');
const postHandler = require('./handlers/postHandler');
const notFoundHandler = require('./handlers/notFoundHandler');

function router(req, res) {
    const { url, method } = req;

    // Serve CSS
    if (method === 'GET' && url === '/styles.css') {
        const cssPath = path.join(__dirname, 'handlers', 'styles.css'); // adjust if needed
        fs.readFile(cssPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading CSS');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
        return;
    }

    if (method === 'GET' && url === '/') {
        return homeHandler(req, res);
    }

    if (method === 'GET' && url === '/posts') {
        return postHandler(req, res);
    }

    return notFoundHandler(req, res);
}

module.exports = router;
