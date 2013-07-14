var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var infile = "index.html";

app.get('/', function(request, response) {
  var mybuffer = fs.readFileSync(infile);
  response.send(mybuffer.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
