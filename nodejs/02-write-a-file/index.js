const http = require('http');
const router = require('./router');

const serverSettings = {
  port: 3000,
  hostname: 'localhost'
};

const server = http.createServer(router);

server.listen(serverSettings, () => {
  console.log('Server is running');
});
