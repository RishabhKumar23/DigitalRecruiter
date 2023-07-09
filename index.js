const express = require('express');

const app = express();

app.use(express.static('public'))
app.get('/', (req, res) => {
res.sendFile(__dirname + '/HomePage/home.html');
});

app.get('/about', (req, res) => {
res.sendFile(__dirname + '/AboutPage/about.html');
});

app.get('/login', (req, res) => {
res.sendFile(__dirname + '/Login-Register/login.html');
});

app.get('/register', (req, res) => {
res.sendFile(__dirname + '/Login-Register/register.html');
});

app.get('/search', (req, res) => {
res.sendFile(__dirname + '/Search/search.html');
});




app.listen(3000, () => {
    console.log('listening on port 3000');
});