"use strict";

console.clear();

const yellowLog = str =>
  console.log(`%c${str}`, `font-weight:bold; background: yellow`);

let pokemons = [
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

// Closures

// Print pokemons after filter (if level greater or equals 3)

const printPokemons = arr => {
  arr.forEach(el => {
    console.log(`${el.name} has ${el.level} level`);
  });
};

const filterPokemons = (arr, filter) => {
  let filtered = [];
  for (let el of arr) filter(el) && filtered.push(el);
  return filtered;
};

printPokemons(filterPokemons(pokemons, pokemon => pokemon.level >= 3));

// Sum of array of numbers

function reduce(arr, f, start) {
  let current = start;
  for (let a of arr) {
    current = f(current, a);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0));
