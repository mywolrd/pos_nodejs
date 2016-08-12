var express = require('express');
var postgres = require('./models/models');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello World!");
})

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port

    console.log("Server running!");
})
