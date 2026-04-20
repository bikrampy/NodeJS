import http from "http";
import fs from 'fs';
import path from "path";

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logPath = path.join(__dirname, 'log', 'log.txt');
const server = http.createServer((req, res) => {
    let log = `New Request From ${req.socket.remoteAddress} for ${req.url} at ${Date.now()}\n`;

    fs.appendFile(logPath, log, (err) => {
        if (err) console.log("Log error:", err);
    });

    switch (req.url) {
        case '/':
            const indexPage = path.join(__dirname, 'index.html');
            fs.readFile(indexPage, (err, val) => {
                if (err) {
                    res.end('Error Loading Page.');
                } else {
                    res.setHeader('Content-Type', 'text/html');
                    res.end(val);
                };
            });
            break;

        case '/about':
            res.end('Hello, I am Bikram Saha');
            break;

        case '/contact':
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Contact Me</h1><p><a href="mailto:bikramsahanolimit@gmail.com">Email Me.</a></p>');
            break;

        case '/api/author':
            const data = {
                name: "Bikram Saha",
                role: "Backend Developer",
                githubURL: "https://github.com/bikrampy",
            };
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;

        default:
            res.end('404 Not Found');
    }

    console.log('Request Received...');
});

server.listen(8000, () => {
    console.log('Server Started...')
});