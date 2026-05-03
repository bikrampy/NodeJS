import http from "http";
import { URL } from "url";

// const myUrl = new URL("http://localhost:8000/products?id=10&name=phone");
// console.log(myUrl);
// console.log(myUrl.pathname); // /products
// console.log(myUrl.search); // ?id=10&name=phone
// console.log(myUrl.searchParams.get("id")); // 10
// console.log(myUrl.searchParams.get("name")); // phone

const server = http.createServer((req, res) => {
    let url = URL.parse(req.url, "http://localhost:8000");

    switch (url.pathname) {
        case "/":
            res.end("Welcome to Home Page...");
            break;

        case "/about":
            res.end("Hello, I am Bikram Saha");
            break;

        case "/contact":
            res.end("You can send a mail at bikramsahanolimit@gmail.com");
            break;

        case "/api/authors":
            let authorName = url.searchParams.get("name");
            let authorRole = url.searchParams.get("role");
            let authorGH = url.searchParams.get("github");
            const data = {
                name: authorName,
                role: authorRole,
                githubURL: `https://github.com/${authorGH}`,
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
    console.log("Server Started...");
});
