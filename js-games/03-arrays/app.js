"use strict";

console.clear();

const yellowLog = str =>
  console.log(`%c${str}`, `font-weight:bold; background: yellow`);

// Arrays

let pokemonsOne = ["Charizard", "Bulbasaur", "Squirtle"];

console.log(`Pokemons array length is ${pokemonsOne.length}\n`, pokemonsOne);
console.log(pokemonsOne[1][0]);

let pokemonsTwo = [
  { name: "Charizard", level: 3, trainingHours: 411 },
  { name: "Bulbasaur", level: 1, trainingHours: 14 },
  { name: "Squirtle", level: 1, trainingHours: 42 },
  { name: "Pikachu", level: 2, trainingHours: 123 },
  { name: "Meowt", level: 1, trainingHours: 76 },
  { name: "Eevee", level: 2, trainingHours: 281 },
  { name: "Mew", level: 4, trainingHours: 902 },
  { name: "Snorlax", level: 2, trainingHours: 305 },
  { name: "Slowpoke", level: 2, trainingHours: 243 },
  { name: "Vaporeon", level: 3, trainingHours: 619 }
];

console.log(pokemonsTwo);

let topPokemons = pokemonsTwo.slice().sort((pokemon1, pokemon2) => {
  if (pokemon1.level < pokemon2) {
    return 1;
  } else if (pokemon1.level > pokemon2.level) {
    return -1;
  } else {
    return 0;
  }
});

topPokemons.forEach(pokemon => console.log(pokemon));

let trainingHoursOverall = 0;
pokemonsTwo.forEach(pokemon => (trainingHoursOverall += pokemon.trainingHours));
console.log(trainingHoursOverall);

// xo game

let game = {
  map: [],
  player1: "",
  player2: "",
  whoseTurn: "",

  new: function(a, b) {
    console.clear();
    if (a != "" && b != "" && a != undefined && b != undefined && a != b) {
      this.player1 = a;
      this.player2 = b;
      yellowLog(`Welcome ${a} and ${b}, let's play!`);
      this.whoseTurn = "noone";
      console.log(`${this.refresh()} play first!`);
    } else {
      yellowLog(
        "Please write correct and different player names when create new game. game.new(player1, player2)"
      );
    }
  },

  printMap: function() {
    if (this.whoseTurn != "") {
      this.map.forEach(row => console.log(row.join(" ")));
      console.log(this.whoseTurn, "now your turn!");
    } else {
      yellowLog("Create new game before print the map.");
    }
  },

  refresh: function() {
    this.map = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
    return this.roll();
  },

  roll: function() {
    if (this.whoseTurn != "") {
      if (Math.round(Math.random())) {
        this.whoseTurn = this.player1;
        return this.player1;
      } else {
        this.whoseTurn = this.player2;
        return this.player2;
      }
    } else {
      yellowLog("Create new game before the roll.");
    }
  },

  turn: function(a, b) {
    if (this.whoseTurn != "") {
      if (a == undefined || b == undefined) {
        yellowLog(
          `Write your move correctly ${this.whoseTurn}. game.move(row, col)`
        );
        return 0;
      }
      if (this.whoseTurn == this.player1) {
        this.map[a - 1][b - 1] = "x";
        this.whoseTurn = this.player2;
        this.printMap();
      } else {
        this.map[a - 1][b - 1] = "o";
        this.whoseTurn = this.player1;
        this.printMap();
      }
    } else {
      yellowLog("Create new game before the turn.");
    }
  }
};
