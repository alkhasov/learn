// Load dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

// Body Parser Init
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', require('./router'));

// Main, error and success views
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/success', function(req, res) {
  res.send('Success');
});

app.get('/error', function(req, res) {
  res.send('Erros');
});

app.get(/./, (req, res) => res.status(404).send('No such request'));

app.listen(3002, function() {
  console.log('Server listening on port 3002.');
});
