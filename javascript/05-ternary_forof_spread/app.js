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

// Ternary conditional

const min = (a, b) => (a > b ? b : a);

//console.log(min(0,-10));

const isEven = a => (a % 2 ? false : true);

// console.log(isEven(1));

const countChar = (str, letter) => {
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) c++;
  }
  return c;
};

// console.log(countChar("nfnnnw", "n"));

const sleepOrNot = time => {
  return time >= 23
    ? "Go sleep immidiately"
    : time >= 22
    ? "Prepeare to sleep"
    : time >= 20
    ? "Now now"
    : time >= 18
    ? "Go walk out here"
    : "You are have to work right now";
};

console.log(sleepOrNot(20));

// Notation

for (let pokemon of pokemons)
  console.log(`${pokemon.level} level ${pokemon.name}`);

// Rest parameters or Spread notation

// all arguments that function have got, will write to array
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

function strs(...strings) {
  console.log(strings);
}

console.log(max(4, 1, 9, -2));

console.log(strs("string", "function", "spread"));

let words = ["never", "fully"];
console.log(["will", words, "understand"]);

let wordz = ["never", "fully"];
console.log(["will", ...wordz, "understand"]);

// Bindings for the elements of the array

let threeLetterName = ["Max", "Sam", "Gal", "Joe"];

const printNames = ([first, second, third, fouth]) => {
  console.log(first, second, third, fouth);
};

let jason = JSON.stringify(pokemons);
console.log(jason);

// Exercises

const range = (start, end) => {
  let output = [];
  while (start < end) {
    output.push(start++);
  }
  return output;
};

let aThreeLetterName = ["Max", "Sam", "Gal", "Joe"];

const reverseArray = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let buff = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = buff;
  }
  return arr;
};

console.log(reverseArray(aThreeLetterName));

console.clear();

/* function arrayToList(arr) {
  if (arr.length) {
    return let list = { el: arr.shift(), rest: arrayToList(arr) }
  } else return list;
} */

function zower(base, exponent) {
  if (exponent == 0) return 1;
  else return base * zower(base, exponent - 1);
}
