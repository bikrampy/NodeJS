import express from "express";
import fs from "fs";

const PORT = 8000;
const app = express();

// Application Level MW
app.use((req, res, next) => {
    const log = `New ${req.method} request at ${req.url} from ${req.ip} at ${Date.now()}.\n`;
    fs.appendFile("./log.txt", log, (err) => {
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
