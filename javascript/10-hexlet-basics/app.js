'use strict';

console.clear();

const yellowLog = str =>
  console.log(`%c${str}`, `font-weight:bold; background: yellow`);

//factorial
const factorial = num => {
  if (num < 0) return 0;
  if (num < 2) return 1;
  const iter = i => {
    if (i === num) return i;
    return i * iter(i + 1);
  };
  return iter(1);
};

console.log(`0; factorial`, factorial(10));

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

console.log(`1; smallestDivisorR`, smallestDivisorR(15));

//imperative way
const smallestDivisor = num => {
  if (num < 1) return NaN;
  if (num === 1) return 1;
  let i = 2;

  while (num % i !== 0) {
    i = i + 1;
    if (Math.round(num / 2) === i) {
      i = num;
    }
  }

  return i;
};

console.log(`2; smallestDivisor`, smallestDivisor(121));

//reverse string
const reverse = str => {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

console.log(`3; reverse`, reverse('reverse'));

const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
};

console.log(`4; isPrime`, isPrime(-3));

//exports and imports
/* 
  export <function, class, expression>
  export default <@>
  import some from './file' //then some = export default
  import { some } from './file' //</function>then some = export fileSome
  import { some as newSome} from './file'
  import { * as foo} form './file' //then foo = all './file' exports
} */

//summare digits in number until length === 1
const addDigits = num => {
  const str = String(num);
  if (str.length === 1) return num;

  let sum = 0;
  str.split('').forEach(d => (sum += Number(d)));
  //console.log(str, sum);
  return addDigits(sum);
};

console.log(`5; addDigits`, addDigits(99));

//checker is the number power of three
const isPowerOfThree = num => {
  if (num < 3) {
    if (num === 1) {
      return true;
    }
    return false;
  }
  return isPowerOfThree(num / 3);
};

console.log(`6; isPowerOfThree`, isPowerOfThree(27));

//ackermann function

const ackermann = (m, n) => {
  if (m == 0) {
    return n + 1;
  }
  if (n == 0) {
    return ackermann(m - 1, 1);
  }
  return ackermann(m - 1, ackermann(m, n - 1));
};

console.log(`7; Ackermann function`, ackermann(4, 0));

//happy number

const sumOfSquareDigits = num => {
  let sum = 0;
  num
    .toString()
    .split('')
    .forEach(el => (sum += Number(el) ** 2));
  return sum;
};

const happyNumber = (num, maxcount) => {
  maxcount = maxcount === undefined ? 10 : maxcount;
  if (num === 10) {
    return true;
  }
  if (maxcount === 0) {
    return false;
  }
  return happyNumber(sumOfSquareDigits(num), maxcount - 1);
};

console.log(`8; happyNumber`, happyNumber(7));
