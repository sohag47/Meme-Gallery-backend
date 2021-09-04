const http = require('http');
const app = require('./app');
const { port } = require('./config/config');

const server = http.createServer(app);

//! Server start
server.listen(port, ()=> {
    console.log(`Application is running and listening at http://localhost:${port}`)
})