const express = require('express');
const cors = require("cors");
const whales = require('./routes/whales')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.options("*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Length, X-Requested-With');
    res.send(200);
});

app.use(express.json());

app.use('/whales', whales)


app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));