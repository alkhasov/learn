const http = require('http');
const fs = require('fs');

const serverSettings = { port: 3000, hostname: 'localhost' };

const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log(method, url);

  if (url === '/form' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html><body>
      <form action="/message" method="POST">
        <label>Name:
        <input type="text" name="name"></label>
        <label>Message:
        <input type="text" name="message"></label>
        <button type="submit">Send</button>
      </form>
      </html></body>
    `);
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const buffer = Buffer.concat(body).toString();
      const parsedBody = buffer
        .split('&')
        .map(el => el.split('='))
        .reduce((acc, cur) => {
          acc[cur[0]] = cur[1];
          return acc;
        }, {});
      console.log(parsedBody.name + ' says ' + parsedBody.message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/form');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write(`<html><body><a href="/form">Open form</a></body></html>`);
  res.end();
});

server.listen(serverSettings, () => {
  console.log('Server is running');
});
