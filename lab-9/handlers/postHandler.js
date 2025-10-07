//posthandler - handles posts 

const posts = require('../data/posts'); // Import the posts data

function postHandler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const postsHtml = posts.map(post => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
        </div>
    `).join('');

    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Posts</title>
          <link rel=stylesheet href=styles.css>
        </head>
        <body>
          <nav>
            <a href="/">Home</a> | <a href="/posts">Posts</a>
          </nav>
          <div class="container">
            <h1>Blog Posts</h1>
            ${postsHtml}
          </div>
        </body>
      </html>
    `);
}

module.exports = postHandler;