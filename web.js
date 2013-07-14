var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {

  var contents = fs.readFileSync('index.html','utf8',function(err,data) {
  if (err) {
    response.send('unable to load the file ' + err);
  } else {
    //response.send(data.toString('utf8'));
    response.send('read the file');
  }
  }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
