const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./api/routes');

const app = express()

async function start() {

  // Response middleware
  app.use(methodOverride());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Routes middleware
  app.use('/api', routes);

  // Listen the server
  const host='localhost';
  const port=8080;
  //app.listen(port, host)
  app.listen(port);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
