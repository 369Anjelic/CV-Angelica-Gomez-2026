const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3006;
const FILE_PATH = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading application');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   📊 Umfrage App                       ║
║   📈 Datenerfassung & Auswertung       ║
╚════════════════════════════════════════╝

🚀 Server läuft auf: http://localhost:${PORT}
📡 Status: READY
📋 App: Loaded

Drücke CTRL+C um zu beenden...
  `);
});
