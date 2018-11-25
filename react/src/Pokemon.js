import React, { Component } from "react";

const pokemonsDatabase = [
  {
    name: "Rapidash",
    level: 3,
    trainingHours: 411,
    imgLink: "https://randompokemon.com/sprites/animated/78.gif"
  },
  {
    name: "Tapu Bulu",
    level: 1,
    trainingHours: 14,
    imgLink: "https://randompokemon.com/sprites/animated/787.gif"
  },
  {
    name: "Tangela",
    level: 1,
    trainingHours: 42,
    imgLink: "https://randompokemon.com/sprites/animated/114.gif"
  },
  {
    name: "Snorlax",
    level: 2,
    trainingHours: 123,
    imgLink: "https://randompokemon.com/sprites/animated/143.gif"
  },
  {
    name: "Charizard Mega Y",
    level: 5,
    trainingHours: 2101,
    imgLink: "https://randompokemon.com/sprites/animated/6-mega-y.gif"
  }
];

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = this.newPokemon();
    this.update = this.update.bind(this);
  }

  update() {
    this.setState(this.newPokemon());
  }

  newPokemon() {
    try {
      if (pokemonsDatabase.length === 0) {
        throw new Error("No pokemons database");
      }
      let random = Math.floor(Math.random() * pokemonsDatabase.length);
      let pokemon = pokemonsDatabase[random];
      pokemon.date = new Date().toLocaleDateString();
      return pokemon;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  render() {
    return (
      <div className="pokemon" onClick={this.update}>
        <img className="photo" src={this.state.imgLink} alt={this.state.name} />
        <h3>
          {this.state.name}, {this.state.level} lvl
        </h3>
        <p>{this.state.date}</p>
        <br />
      </div>
    );
  }
}

class Pokemons extends Component {
  render() {
    return (
      <div className="App">
        <Pokemon />
        <Pokemon />
      </div>
    );
  }
}

export default Pokemons;
