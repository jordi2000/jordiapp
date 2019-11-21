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
     jugador.pos.length === 2 &&
     typeof jugador.tam === 'number') {
    //buscar al objeto
    var indice = -1;
    for (var i = 0; i < jugadores.length; i++) {
    if(jugadores[i].nombre === jugador.nombre) {
   indice = i;
     break;
    }
    }
    if (indice < 0) {
      //crear
      jugadores.push(jugador);
      res.end('jugador creado');
    }else{
      //actualizar
      jugadores[indice] = jugador;
      for ( var i = 0; < jugadores.length; i++) {
        var dx = jugadores[i].pos[0] - jugador.pos[0];
        var dy = jugadores[i].pos[1] - jugador.pos[1];
        var d = math.sqrt(dx * dx + dy * dy);
      res.end('jugador actualizado');
    }
    
  } else {
    res.end('incorrecto');
  }
  } else {
    res.end('error');
  }
  
  
}).listen(process.env.PORT);
