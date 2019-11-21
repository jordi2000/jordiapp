var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('HOLA!,este es el servidor de Jordi Amador');
}).listen(process.env.PORT);
