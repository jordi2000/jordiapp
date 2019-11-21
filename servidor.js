var http = require('http');
var url = require('url');

var jugadores = [];

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).query;
  if (q.jugador) {
    var jugador = JSON.parse(q.jugador);
  if (typeof jugador.nombre === 'string' &&
     typeof jugador.pos === 'object' &&
     typeof jugador.pos.length === 'number' &&
     jugador.pos.length === 2) {
    res.end('correcto');
  } else {
    res.end('incorrecto');
  }
  } else {
    res.end('error');
  }
  
  
}).listen(process.env.PORT);
