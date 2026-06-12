const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3002;
const FILE_PATH = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading game');
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
║   🛩️  FLY - Flight Trainer v13        ║
║   ✈️  Cessna 172 World Flight         ║
╚════════════════════════════════════════╝

🚀 Server läuft auf: http://localhost:${PORT}
📡 Status: READY
🎮 Game: Loaded

Drücke CTRL+C um zu beenden...
  `);
});
