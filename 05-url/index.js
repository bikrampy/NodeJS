import http from "http";
import { URL } from 'url';
const server = http.createServer((req, res) => {
    let url = URL.parse(req.url, 'http://localhost:8000');

    switch (url.pathname) {
        case '/':
            res.end('Welcome to Home Page...')
            break;

        case '/about':
            res.end('Hello, I am Bikram Saha');
            break;

        case '/contact':
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Contact Me</h1><p><a href="mailto:bikramsahanolimit@gmail.com">Email Me.</a></p>');
            break;

        case '/api/authors':
            let authorName = url.searchParams.get('name');
            const data = {
                name: authorName,
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
