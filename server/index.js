var express = require('express');
var app = express();
var config = require('./config.js');
var port = config.serverPort;
var compression = require('compression');

// compress all responses
app.use(compression());

app.use(express.static(__dirname + './../public'));



app.listen(port, function() {
    console.log('nailed it on port ' + port);
})
