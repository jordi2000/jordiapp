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
    for (var i = 0; i < juagdores.length; i++) {
    if(jugadores[i].nom === jugador.nom;) {
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
      res.end('jugador actualizado');
    }
    
  } else {
    res.end('incorrecto');
  }
  } else {
    res.end('error');
  }
  
  
}).listen(process.env.PORT);
