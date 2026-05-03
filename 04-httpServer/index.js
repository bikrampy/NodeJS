import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logPath = path.join(__dirname, "log", "log.txt");
const server = http.createServer((req, res) => {
    let log = `New Request From ${req.socket.remoteAddress} for ${req.url} at ${Date.now()}\n`;
    fs.appendFile(logPath, log, (err) => {
        if (err) {
            console.log("Log error:", err);
        }
    });

    switch (req.url) {
        case "/":
            const indexPage = path.join(__dirname, "views", "index.html");
            fs.readFile(indexPage, (err, val) => {
                if (err) {
                    res.end("Error Loading Page.");
                } else {
                    res.setHeader("Content-Type", "text/html");
                    res.end(val);
                }
            });
            break;

        case "/about":
            const aboutPage = path.join(__dirname, "views", "about.html");
            fs.readFile(aboutPage, (err, val) => {
                if (err) {
                    res.end("Error Loading Page.");
                } else {
                    res.setHeader("Content-Type", "text/html");
                    res.end(val);
                }
            });
            break;

        case "/contact":
            const contactPage = path.join(__dirname, "views", "contact.html");
            fs.readFile(contactPage, (err, data) => {
                if (err) {
                    res.end("Error Loading Page");
                } else {
                    res.setHeader("Content-Type", "text/html");
                    res.end(data);
                }
            });
            break;

        case "/api/author":
            const data = {
                name: "Bikram Saha",
                role: "Backend Developer",
                githubURL: "https://github.com/bikrampy",
            };
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
            break;

        default:
            res.end("404 Not Found");
    }

    console.log("Request Received...");
});

server.listen(8000, () => {
    console.log("Server started at Port 8000");
});
