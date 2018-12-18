const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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
db.on('error', console.error.bind(console, __filename + ' connection error:'));
db.once('open', function() {
  console.log(__filename + '\nConnected to database');
});

const pokemonSchema = new mongoose.Schema({
  name: String,
  level: Number
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

const createSquirlte = function() {
  // Method 1
  const squirtle = new Pokemon({ name: 'Squirtle', level: 3 });
  squirtle.save(err => err && console.log(err));
};

//createSquirlte()

const createBulbasaur = function() {
  // Method 2
  Pokemon.create({ name: 'Bulbasaur', level: 2 }, (err, pokemon) => {
    err && console.log(err);
    console.log(pokemon);
  });
};

// createBulbasaur()

/* Pokemon.find({ name: /./ }, (err, data) => {
  err && console.error(err);
  console.log(data);
}); */

const updatePokemon = function() {
  Pokemon.updateOne({ name: 'Bulbasaur' }, { level: 4 }, (err, res) => {
    err && console.error(err);
    console.log(res);
  });
};

Pokemon.findOne({ name: 'Billy' }, (err, pokemon) => {
  err && console.error(err);
  !pokemon && console.error(`No matches`);
  console.log(pokemon);

  pokemon.level += 1;
  pokemon.save((err, updatedPokemon) => {
    err && console.error(err);
    console.log(updatedPokemon);
  });
});

app.listen(port, () => {
  console.log('\x1b[1m', `Server listening on port ${port}.`);
});
