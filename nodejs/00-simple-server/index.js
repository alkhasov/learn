const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === '/status') {
    res.statusCode = 200;
    res.write('Server is online');
    return res.end();
  }
  if (url === '/form') {
    res.statusCode = 200;
    res.write(`
      <html><body>
      <form action="/message" method="POST">
        <input type="text" name="message">
        <button type="submit">Send</button>
      </form>
      </html></body>
    `);
    return res.end();
  }
  if (url === '/message') {
    console.log('Request received');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body>');
  res.write(
    '<h1>Privet, Mir!</h2></br><h4>Current path: localhost' + url + '</h4>'
  );
  res.write('<a href="/form">Open form</a>');
  res.write('</html></body>');
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('Server is running');
});
