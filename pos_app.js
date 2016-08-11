var express = require('express');
var postgres = require('./postgres');
var app = express();

postgres.setPool('127.0.0.1', 'projects', 'pos', 'password');

app.get('/', function(req, res) {
    res.send("Hello World!");
})

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port

    console.log("Server running!");
})
