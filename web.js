var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var infile = "./index.html";

app.get('/', function(request, response) {
  var mybuffer;
  fs.readFileSync(infile, function read(err, data) {
    if (err) {
  console.log("error with file read " + err);
      throw err;
    }
    mybuffer = data;
  response.send(mybuffer.toString('utf-8'));
}));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
