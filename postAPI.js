var express = require('express');
var parser = require('body-parser');

const app = express();

app.use(parser.json());
app.post('/', (req, res) => {
    res.end(req.query.firstName + ' ' + req.query.lastName);
});

app.post('/about', (req, res) => {
    const json = req.body;
    const data = JSON.stringify(json);
    //const Name=json[0]['Name'];
    res.end(data);
});

app.post('/contact', (req, res) => {
    res.end(req.header('firstName') + ' ' + req.header('lastName'));
})

app.listen(4040, () => {
    console.log("Server is running on port 4040");
})