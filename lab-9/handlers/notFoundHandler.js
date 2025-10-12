// not found handler - handles 404 error

function notFoundHandler(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>404 Not Found</title>
          <link rel=stylesheet href=styles.css>
        </head>
        <body>
          <nav>
            <a href="/">Home</a> | <a href="/posts">Posts</a>
          </nav>
          <div class="container">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Go Home</a>
          </div>
        </body>
      </html>
    `);
}

module.exports = notFoundHandler;