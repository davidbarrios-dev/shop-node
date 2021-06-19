require('dotenv').config(); // dotenv es para conf variables de entorno
const Server = require('./models/server');

const server = new Server();
server.listen();
