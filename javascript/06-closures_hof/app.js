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

// printPokemons(filterPokemons(pokemons, pokemon => pokemon.level >= 3));

// Sum of array of numbers

function reduce(arr, f, start) {
  let current = start;
  for (let a of arr) {
    current = f(current, a);
  }
  return current;
}

// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0));

//let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

let arrays = [[1, 2, 3], [4, 5], [6]];

const merge = arr => {
  return arr.reduce((a, b) => a.concat(b));
};

let flatArrays = merge(arrays);

//

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

// loop(10, n => n > 0, n => n - 2, console.log);

const every = (array, test) => {
  for (let a of array) if (test(a)) return true;
  return false;
};

// console.log(every([1, 3, 5], n => n < 10));

const everySome = (array, test) => {
  return array.some(test);
};

// console.log(everySome([1, 3, 5], n => n < -10));

let pokemon = {};

pokemon.printNewLvl = function(name, lvl) {
  console.log(`${name} updated to ${lvl} level`);
};

pokemon.printNewLvl(`Squirtle`, 5);

function speak(line) {
  console.log(`${this.name} pokemon says «${line}»`);
}

let squirtle = { name: "Squirtle", speak };

squirtle.speak("Sqrl, sqrl!");

speak.call(squirtle, "Water, please");
