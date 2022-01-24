//Install express server
var compression = require('compression');
var express = require('express');
const path = require('path');

var app = express();
app.use(compression());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 9000);