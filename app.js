var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'static/views')));

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port

    console.log("Server running!");
})
