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

const errorHandler = (res, msg) => {};

app.post('/find', (req, res, next) => {
  console.log(req.body);
  if (!req.body.name) {
    res
      .status(400)
      .send(`Bad request or param`)
      .end();
    return;
  }

  Pokemon.findOne({ name: req.body.name }, (err, pokemon) => {
    if (err) {
      res.send(`Not found such pokemon`);
      return;
    }
    if (!pokemon) {
      res.send(`Not found such pokemon`);
      return;
    }
    console.log(pokemon);

    pokemon.level += 1;
    pokemon.save((err, updatedPokemon) => {
      err && console.error(err);
      res.status(201).send(updatedPokemon);
    });
  });
});

const entitySchema = new mongoose.Schema({
  _folder: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date_create: {
    type: Date,
    default: Date.now
  },
  date_lastEdit: {
    type: Date,
    default: Date.now
  }
});

const Entity = new mongoose.model('Entity', entitySchema);

const About = new Entity(
  { _folder: 'personal', route: '/about', name: 'about', title: 'About' },
  err => err && console.error(err)
);
//About.save();

const Personal = new Entity({
  _folder: '~',
  route: '/~',
  name: 'personal',
  title: 'Personal'
});

//Personal.save();

Entity.find({ name: /./ }, (err, entities) => {
  if (err) {
    console.error(err);
    return;
  }
  //console.log(entities);
});

/* app.get('/:page', (req, res, next) => {
  const page = req.params.page.toLowerCase();
  console.log(page);
  Entity.find({ name: page }, (err, page) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (!page) {
      res.status(400).send(`Out of page`);
      return;
    }
    if (page._folder != '~') {
      Entity.findOne({ name: page._folder }, (err, folder) => {
        res.status(200).send({
          _up: folder.route,
          _route: page.route,
          title: page.title,
          folder: folder.title
        });
      });
    } else console.error(`root detected`);
  });
}); */

app.get('/routes', (req, res, next) => {
  Entity.find({ name: /[a-zA-Z]/ }, (err, pages) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (!pages) {
      res.status(400).send(`Out of page`);
      return;
    }
    const routes = pages.map(p => {
      page =>
        async function(page) {
          if (page._folder != '~') {
            let upFolder = {};
            await Entity.findOne({ name: page._folder }, (err, folder) => {
              upFolder = folder;
            });
            return {
              _up: upFolder.route,
              _route: page.route,
              title: page.title,
              folder: upFolder.title
            };
            /*         console.log(page._folder);
        Entity.findOne()
          .where('name')
          .gt(page._folder)
          .exec((err, pa) => console.log(`dsddd`, pa)); */
          } else {
            return false;
          }
        };
    });
    console.log(routes);
    res.send(routes);
  });
});

app.listen(port, () => {
  console.log('\x1b[1m', `Server listening on port ${port}.`);
});
