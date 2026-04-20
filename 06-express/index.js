import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    let { name } = req.query;
    if (name) {
        return res.status(200).send(`<h1>Hello, ${req.query.name}. You are at Homepage.</h1>`);
    } else {
        return res.status(200).send('<h1>Hello, User. You are at Homepage.</h1>');
    }
});

app.get('/about', (req, res) => {
    res.send('You are at About Page...');
});

app.get('/api/users', (req, res) => {
    return res.json({
        name: "Bikram",
        role: "Backend Developer"
    });
});

app.get('/*port', (req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log('Server started on Port 3000');
});