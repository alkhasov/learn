const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const utils = require('../utils/');

// Initializations
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  'mongodb://localhost/learn',
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, '[mongo.js] connection error:'));
db.once('open', function() {
  console.log(__filename, '\nConnected to database');
});

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  level: Number,
  owner: {
    type: String,
    required: false
  }
});

pokemonSchema.methods.speak = function() {
  let greeting = this.name
    ? `Hey, I'm ${this.name} and I achieve ${this.level} level`
    : "I'm unknown, sorry";
  console.log(greeting);
};

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

console.log(typeof Pokemon.schema.obj);

// let bulbasaur = new Pokemon({ name: 'Bulbasaur', level: 1 });

const params = { name: 'Bulbasaur' };

/* Pokemon.deleteMany(params, err => {
  err ? console.error(err) : console.log('Successful delete many');
}); */

/* Pokemon.find((err, pokemons) => {
  if (err) return console.error(err);
  console.log(pokemons);
}); */

app.get('/', (req, res) => {
  res.send(`squirtle`);
});

app.post('/validate', (req, res) => {
  console.log(req.body);
  const status = utils.isValidBody(Pokemon.schema, req.body);
  res.send(status);
});

app
  .route('/any')
  .get((req, res, next) => res.send(`GET resquest`))
  .post((req, res, next) => res.send(`POST request`));

app.post('/new', (req, res) => {
  try {
    if (!req.body.name) throw (param = `name`);
    if (!req.body.level) throw (param = `level`);
    try {
      const pokemon = new Pokemon({
        name: req.body.name,
        level: req.body.level
      });
      pokemon.save((err, newPokemon) => {
        if (err) throw err;
        res.status(200).send('New pokemon added');
      });
    } catch (err) {
      res.status(500).send('Error on server', err);
    }
  } catch (param) {
    res
      .status(400)
      .send(`Bad request, no ${param} param`)
      .end();
  }
});

app.listen(port, () => {
  console.log(`\x1b[1m`, `Server listening on port ${port}.`);
});
