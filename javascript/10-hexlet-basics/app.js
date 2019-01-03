'use strict';

console.clear();

const yellowLog = str =>
  console.log(`%c${str}`, `font-weight:bold; background: yellow`);

//iteration way recursion

const smallestDivisorR = num => {
  if (num === 0) return 0;
  if (num === 1) return 1;

  const iter = (num, acc) => {
    if (num === acc) {
      return acc;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(num, acc + 1);
  };
  return iter(num, 2);
};

console.log(`smallestDivisorR`, smallestDivisorR(15));

const smallestDivisor = num => {
  let c = 2;
  let res = 1;

  while (res != 0 || res != num) {
    res = num % c;
    c++;
    console.log(num, res, c);
  }

  return res;
};

//console.log(`smallestDivisor`, smallestDivisor(15));
