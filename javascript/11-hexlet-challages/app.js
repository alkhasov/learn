'use strict';

//console.clear();

const yellowLog = str =>
  console.log(`%c${str}`, `font-weight:bold; background: yellow`);

//happy number https://ru.hexlet.io/challenges/programming_basics_happy_numbers
const isHappyNumber = (num, init) => {
  if (init && String(num).length === 1) {
    if (num === 1) {
      return true;
    } else {
      return false;
    }
  }
  return isHappyNumber(
    String(num)
      .split('')
      .map(el => el ** 2)
      .reduce((acc, curr) => acc + curr),
    1
  );
};
const hNum = 28;
console.log(`#2 Is ${hNum} a happy number? `, isHappyNumber(hNum));

//happy ticket https://ru.hexlet.io/challenges/programming_basics_happy_ticket
const isHappyTicket = num => {
  const t = String(num);
  if (t.length % 2 !== 0) return false;
  const reducer = (acc, curr) => Number(acc) + Number(curr);
  const a = t
    .slice(0, t.length / 2)
    .split('')
    .reduce(reducer);
  const b = t
    .slice(t.length / 2, t.length)
    .split('')
    .reduce(reducer);
  if (a === b) {
    return true;
  }
  return false;
};

const tNum = 128722;
console.log(`#3 Is ${tNum} a happy ticket?`, isHappyTicket(tNum));

//invert case https://ru.hexlet.io/challenges/programming_basics_invert_case
const invertCase = str => {
  if (typeof str !== typeof 'a') return false;
  return str
    .split('')
    .map(char =>
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    )
    .join('');
};

console.log(`#4 coNvERtcAsE!1`, invertCase('coNvERtcAsE!1'));

//reverse integer https://ru.hexlet.io/challenges/programming_basics_reverse_integer

const reverseInt = num => {
  if (num === 0) return 0;
  let isPositive = 1;
  if (num < 0) isPositive = -1;
  return (
    Number(
      String(num * isPositive)
        .split('')
        .reduce((acc, curr) => curr + acc)
    ) * isPositive
  );
};

console.log(`#5 reverse integer -1235`, reverseInt(-1235));

//reverse str https://ru.hexlet.io/challenges/programming_basics_reverse_string

const reverseStr = str => {
  return str.split('').reduce((acc, curr) => curr + acc);
  //or reverse()
};

console.log(`#6 reverse string`, reverseStr('reverse string'));

//export default reverseStr;

//dna to rna converter https://ru.hexlet.io/challenges/programming_basics_rna

const dnaToRna = dna => {
  const convertSquence = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  return dna
    .split('')
    .map(piece => convertSquence[piece])
    .join('');
};

console.log(`#7 dna to rna converter, ACGTGGTCTTAA`, dnaToRna('ACGTGGTCTTAA'));

//square sum https://ru.hexlet.io/challenges/intro_to_programming_sum_square_difference

const sumSquareDifference = n => {
  let sumOfSquares = 0;
  let sum = 0;
  for (let i = 0; i <= n; i += 1) {
    sum += i;
    sumOfSquares += i ** 2;
  }
  // console.log(sum ** 2, sumOfSquares);
  return sum ** 2 - sumOfSquares;
};

console.log(`#8 sum square diff, 10`, sumSquareDifference(15));

//minutes to hour:minutes https://ru.hexlet.io/challenges/programming_basics_time

const formattedTime = mins => {
  let hours = Math.floor(mins / 60);
  let minutes = mins % 60;
  if (hours < 10) hours = '0' + hours;
  if (hours >= 24) hours = hours % 24;
  if (minutes < 10) minutes = '0' + minutes;
  return `${hours}:${minutes}`;
};

//console.log(`foormatted time 12:34`, formattedTime(754));
console.log(`#9 foormatted time 1:00`, formattedTime(1500));

//ackermann

const ackermann = (m, n) => {
  if (m === 0 && n >= 0) return n + 1;
  if (m > 0 && n === 0) return ackermann(m - 1, 1);
  if (m > 0 && n > 0) return ackermann(m - 1, ackermann(m, n - 1));
  if (m < 0 || n < 0) return 0;
};

/* console.log(`(0, -1)`, ackermann(0, -1));
console.log(`(0, 0)`, ackermann(0, 0));
console.log(`(1, 1)`, ackermann(1, 1)); */
console.log(`#10 ackerman(3, 7)`, ackermann(3, 7));

//diff angle https://ru.hexlet.io/challenges/intro_to_programming_angle_difference
const diff = (angleA, angleB, print) => {
  let preDiff;
  let actualDiff;
  if (angleA > angleB) {
    preDiff = angleA - angleB;
  } else {
    preDiff = angleB - angleA;
  }
  if (preDiff > 180) {
    actualDiff = 360 - preDiff;
  } else {
    actualDiff = preDiff;
  }
  print && console.log(`diff`, actualDiff);
  return actualDiff;
};

console.log(`#11 min angle diff(45, 290)`, diff(45, 290));

/*
diff(0, 45, 1);
console.log(`test`, 45);
diff(0, 180, 1);
console.log(`test`, 180);
diff(0, 190, 1);
console.log(`test`, 170);
diff(120, 280, 1);
console.log(`test`, 160);
diff(45, 290, 1);
console.log(`test`, 115);
diff(45, 190, 1);
console.log(`test`, 145);
*/

//perfect numbers https://ru.hexlet.io/challenges/intro_to_programming_perfect_numbers

const isPerfect = num => {
  if (num % 2 !== 0) return false; //because currently no found any odd perfect number

  let delimeters = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) delimeters.push(i);
    //here maybe optimization like i *= i - 1
  }
  if (num === delimeters.reduce((acc, curr) => acc + curr)) return true;
  return false;
};

console.log(`#12 isPerfect(8128)`, isPerfect(8128));
