"use strict";

console.clear();

//Variables

let a = 50;
let b = 40;
console.log(a + b + 30);

const c = a * a;
console.log(c);

var expression = "50 * 50 = " + c;
console.log(expression, a);

console.log("%cGrid master 0.5", "font-weight:bold; background: yellow");

//Game

let page_width = 830;
let offset = 15;
let grid_width = page_width - offset * 2;
const page_msg = `${page_width}px page width with ${offset}px offset then grid width is ${grid_width}px`;
console.log(page_msg);

let column_count = 4;
let gutter_width = 40;
let without_gutter = grid_width - gutter_width * (column_count - 1);
let column_width = without_gutter / column_count;
const grid_msg = `${column_count} columns grid with ${gutter_width}px gutters, where columns is ${column_width}px width`;
console.log(grid_msg);
console.log(`Useful grid space is ${without_gutter}px`);

// Arrays

console.log("%cArrays", "font-weight:bold; background: yellow");
let names = ["Mia", "Alessanda", "Julia"];
console.log(names);

const names_msg = `Some girl's name is ${names[1]}`;
console.log(names_msg);

let html = `<p>${names_msg}</p>`;
document.querySelector("#app").innerHTML = html;

// Object

let person = {
  givenName: "Adam",
  familyName: "Helmut",
  country: "Belise"
};

console.log(
  `Hello ${person.givenName} ${person.familyName} from ${person.country}`
);
