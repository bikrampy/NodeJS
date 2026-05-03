import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8000;
const app = express();

app.get("/", (req, res) => {
    res.status(200).send(`<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home Page</title>
    </head>
    <body>
        <h1>Home Page</h1>
        <p>
            Welcome User!
        </p>
    </body>
</html>
`);
});

app.get("/about", (req, res) => {
    const aboutPage = path.join(__dirname, "views", "about.html");
    res.status(200).sendFile(aboutPage);
});

app.get("/author", (req, res) => {
    return res.json({
        name: "Bikram Saha",
        role: "Backend Developer",
    });
});

app.get("/authorimage", (req, res) => {
    const userImage = path.join(__dirname, "views", "Photo.jpg");
    res.status(200).sendFile(userImage);
});

app.get("/greet/:name", (req, res) => {
    const userName = req.params.name;
    res.status(200).send(`Welcome ${userName}`);
});

app.get("/search", (req, res) => {
    let { id } = req.query;
    if (id) {
        res.status(200).send(`Product id is ${id}.`);
    } else {
        res.status(404).send("No product id found");
    }
});

app.get("/*port", (req, res) => {
    const notFoundPage = path.join(__dirname, "views", "404.html");
    res.status(404).sendFile(notFoundPage);
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`);
});
