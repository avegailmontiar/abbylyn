              const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let submittedData = [];


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    
    submittedData.push({ name, age });
    res.redirect('/');
});


app.get('/data', (req, res) => {
    res.json(submittedData);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


    
