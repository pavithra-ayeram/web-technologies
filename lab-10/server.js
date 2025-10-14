// server.js

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

function serveFile(filePath, contentType, res, fallbackMessage) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      const logMessage = `[${new Date().toISOString()}] Error: ${err.message}\n`;
      fs.appendFile("error.log", logMessage, () => {});
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>${fallbackMessage}</h1>`);
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  console.log(`Incoming request for: ${pathname}`);

  if (pathname === "/") {
    serveFile(path.join(__dirname, "index.html"), "text/html", res, "Home Page");
  } else if (pathname === "/about") {
    serveFile(path.join(__dirname, "about.html"), "text/html", res, "About Page");
  } else if (pathname === "/styles.css") {
    serveFile(path.join(__dirname, "styles.css"), "text/css", res, "");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
