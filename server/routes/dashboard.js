var express = require('express');
var app = express.Router();

app.get('/', (req, res) => {
    res.send({
        Message: 'Welcome To Medical Councelling:)'
    })
})


module.exports = app;