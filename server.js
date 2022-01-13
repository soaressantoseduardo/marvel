var http = require('http');
var static = require('node-static');

var path = new static.Server("C:/desenvolvimento/marvel/")

http.createServer(function (req, res) {
    req.addListener('end', function () {
        path.serve(req, res)
    }).resume()
  }).listen(8080);


  console.log('Server criado em: localhost:8080')