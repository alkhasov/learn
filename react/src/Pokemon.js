import React, { Component } from "react";

const pokemonsDatabase = [
  {
    id: 1,
    name: "Rapidash",
    level: 3,
    trainingHours: 411,
    imgLink: "img/pokemons/78.gif"
  },
  {
    id: 2,
    name: "Tapu Bulu",
    level: 1,
    trainingHours: 14,
    imgLink: "img/pokemons/787.gif"
  },
  {
    id: 3,
    name: "Tangela",
    level: 1,
    trainingHours: 42,
    imgLink: "img/pokemons/114.gif"
  },
  {
    id: 4,
    name: "Snorlax",
    level: 2,
    trainingHours: 123,
    imgLink: "img/pokemons/143.gif"
  },
  {
    id: 5,
    name: "Charizard Mega Y",
    level: 5,
    trainingHours: 2101,
    imgLink: "img/pokemons/6-mega-y.gif"
  }
];

class Pokemon extends Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div className="pokemon">
        <img className="photo" src={pokemon.imgLink} alt={pokemon.name} />
        <h3>
          {pokemon.name}, {pokemon.level} lvl
        </h3>
        <p>{pokemon.date}</p>
        <br />
      </div>
    );
  }
}

class GetPokemons extends Component {
  randomPokemon = () => {
    if (pokemonsDatabase.length === 0) {
      throw new Error("No pokemons database");
    }
    let random = Math.floor(Math.random() * pokemonsDatabase.length);
    let pokemon = pokemonsDatabase[random];
    pokemon.date = new Date().toLocaleDateString();
    return pokemon;
  };

  render() {
    if (this.props.database !== undefined) {
      return this.props.database.map(el => (
        <Pokemon pokemon={el} key={el.id} />
      ));
    } else {
      return <Pokemon pokemon={this.randomPokemon()} />;
    }
  }
}

class Pokemons extends Component {
  getData = () => {
    if (pokemonsDatabase.length === 0) {
      throw new Error("No pokemons database");
    }
    return pokemonsDatabase;
  };

  render() {
    return (
      <div className="App">
        <GetPokemons database={this.getData()} />
      </div>
    );
  }
}

export default Pokemons;
