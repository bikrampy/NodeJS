import express from "express";
import fs from "fs";

import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8000;
const app = express();

// Application Level MW
app.use((req, res, next) => {
    const log = `New ${req.method} request at ${req.url} from ${req.ip} at ${new Date()}.\n`;
    const logFile = path.join(__dirname, "logs", "log.txt");
    fs.appendFile(logFile, log, (err) => {
        if (err) {
            res.status(404).send("Something went wrong.");
        } else {
            next();
        }
    });
});

app.get("/", (req, res) => {
    res.send("Hello World...");
});

app.get(
    "/about",
    // Route Level MW
    (req, res, next) => {
        req.pageBody = "This is the about page...";
        next();
    },
    (req, res) => {
        res.send(`${req.pageBody}`);
    },
);

app.listen(PORT, () => {
    console.log("Server started on Port 8000");
});
