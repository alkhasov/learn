const fs = require('fs');

module.exports = (req, res) => {
  const { url, method } = req;

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
    req.on('data', chunck => {
      body.push(chunck);
    });
    return req.on('end', () => {
      const buffer = Buffer.concat(body).toString();
      const parsedBody = buffer.split('&').map(el => el.split('='));
      fs.writeFile('output.json', JSON.stringify(parsedBody), err => {
        if (err) throw err;
        res.statusCode = 302;
        res.setHeader('Location', '/form');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`<html><body><a href="/form">Open form</a></body></html>`);
  res.end();
};
