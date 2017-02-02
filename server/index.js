var express = require('express');
var app = express();
var config = require('./config.js');
var port = config.serverPort;

app.use(express.static(__dirname + './../public'));



app.listen(port, function() {
    console.log('nailed it on port ' + port);
})
