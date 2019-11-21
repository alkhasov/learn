const http = require('http');

const users = ['Alex'];

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.write('Konichiwa!');
    return res.end();
  }

  if (url === '/users' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<hmtl><body><ul>');
    res.write(users.map(user => `<li>${user}</li>`).join(''));
    res.write('</ul><a href="/new-user">Create new one</a></body></html>');
    return res.end();
  }

  if (url === '/new-user' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html><body><form action="/create-user" method="POST">
    <label>Name:
    <input type="text" name="user"/></label>
    <button type="submit">Create</button>
    </form></body></html>`);
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const buffer = Buffer.concat(body).toString();
      const parsedBody = buffer
        .split('&')
        .map(el => el.split('='))
        .forEach(el => users.push(el[1]));
      //parsedBody.forEach(el => users.push(el[1]));
      //console.log(parsedBody);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/users');
    return res.end();
  }

  console.log(url, method);
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('Server in running');
});
