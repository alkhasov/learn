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

let re1 = new RegExp("abc");
let re2 = /abc/;

console.log(re1.test("abcxe"));
console.log(re1.test("abdxe"));

console.log(/[0123456789]/.test("in 2018"));
console.log(/[0-9]/.test("in 2018"));

/*
\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)

\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	  Any character except for newline
*/

console.log("A", /\d\w/.test("1a"));
console.log("A", /\d\w/.test("a1"));

let dateFormatA = /\d\d-\d\d-\d\d/;
console.log("B", dateFormatA.test("12-12-2012"));

// ^ symbol for inverting expression, means except

let withoutZero = /[^1-9]/; //in test true means there is 0
console.log("C", withoutZero.test("345678376545"));
console.log("C", withoutZero.test("3456783760545"));

let oneOrMoreDigit = /\d+/;
let zeroOrMoreDigit = /\d*/;
console.log("\nD", oneOrMoreDigit.test("123"));
console.log("D", oneOrMoreDigit.test("a"));
console.log("D", zeroOrMoreDigit.test("a1"));
console.log("D", zeroOrMoreDigit.test("a"));

let lettermark = /lette?rmark/; // if not e throw false, but empty is true
console.log("\nE", lettermark.test("lettermark"));
console.log("E", lettermark.test("lett1rmark"));
console.log("E", lettermark.test("lettrmark"));

// count of times, d{at least, maximum}
let dateFormatB = /\d{1,2}-\d{1,2}-\d{2 ,4}/;
console.log("\nF", dateFormatB.test("12-12-12"));
console.log("F", dateFormatB.test("2-2-2012"));
console.log("F", dateFormatB.test("12-12-212"));

console.log("\nG", /\d+/.exec("holiday1992"));
console.log("G", /\D+/.exec("1holiday1992"));
console.log("G", "any22word".match(/[^0-9]+/));

var cartoonCrying = /boo+(hoo+)+/i; //i at the end makes expression case insensetive
console.log(cartoonCrying.test("Boohoooohoohooo"));

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(/(bad)(ly)?/.exec("badly"));
console.log(/(\d)+/.exec("123"));

console.log(new Date());
console.log(`${new Date().getTime()}ms`);

const getDate = str => {
  let [_, day, month, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(str);
  return new Date(year, month - 1, day);
};

console.log(getDate("280-11-2018"));

console.log("\nH", /pare/.test("preparepa"));
console.log("H", /\bpare\b/.test("preparepa"));

let fruitsArr = /\b\d+ (lemon|apple|grape)s?\b/;

console.log("\nJ", fruitsArr.test("10 apples"));
console.log("J", fruitsArr.test("1 grape"));
console.log("J", fruitsArr.test("2 peaches"));
console.log("J", fruitsArr.test("lemons"));
