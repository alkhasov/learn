const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(express.static('../public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const error = {
  style: 'red',
  header: 'Something went wrong!',
  desc: 'File was not uploaded successfully'
};

let db = {
  responses: []
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index'));

app.get('/error', (req, res) => {
  res.render('index', { result: error });
});

app.put('/put', (req, res) => {
  res.send('Got a put request');
});

app.all('/any', (req, res) => {
  switch (req.method) {
    case 'PUT':
      res.send('Put some');
      break;
    case 'GET':
      res.send({ param: 'value', second: 'value2' });
    default:
      res.send('Eh');
  }
});

app.get('/post', (req, res) => {
  const data = req.body;
  console.log(data);
  const keys = Object.keys(data);
  db.responses.push(data);
  res.status(200).send(db);
});

app.listen(port, () =>
  console.log(
    `\x1b[1m`,
    `${path.basename(__filename)} based server are running on port ${port}`
  )
);
