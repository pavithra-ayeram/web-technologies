//home handler - main home page stuff

function homeHandler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Home</title>
          <link rel=stylesheet href=styles.css>
        </head>
        <body>
          <nav>
            <a href="/">Home</a> | <a href="/posts">Posts</a>
          </nav>
          <div class="container">
            <h1>Welcome to My Blog</h1>
            <p>This is the home page of a simple Node.js blog.</p>
          </div>
        </body>
      </html>
    `);
}

module.exports = homeHandler;