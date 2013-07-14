var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var infile = "index.html";
var mybuffer = new Buffer("test buffer");

app.get('/', function(request, response) {
  mybuffer = fs.readFileSync(infile);
  response.send(mybuffer.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
