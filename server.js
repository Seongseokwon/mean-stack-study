const http = require('http');
const app = require('./backend/app');

const normalizePOrt = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
}

const onError = error => {
  if(error.syscall !== 'listen'){
    throw error;
  }

  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code){
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      break;
    case "EADDRINUSE":


  }
}
const port = process.env.PORT || 3000;

app.set('port', port);
const server = http.createServer(app);


server.listen(port);


