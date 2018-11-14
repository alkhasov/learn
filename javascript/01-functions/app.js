"use strict";

console.clear();

//functions

function oldType(param) {
  console.log("Old type funciton works");
  return param * 2;
}
console.log(oldType(10));

const basicType = function(param) {
  console.log("Basic type functions also works");
  return param * 3;
};
console.log(basicType(33));

const modernType = param => {
  console.log("Modern type functions of course works too");
  return param * param;
};
console.log(modernType(50));

const modernShort = param => param + 5;

console.log(modernShort(25));

/* Есть массив объектов – заявки, есть условия отбора на конкурс, надо вывести заявки которые проходят отбор, а также веруть массив только с отобранными заявками*/

let ladies = [
  {
    name: "Monica",
    age: 17,
    city: "Lisbon"
  },
  {
    name: "Alessandra",
    age: 21,
    city: "Kharkiv"
  },
  {
    name: "Veronika",
    age: 19,
    city: "Moscow"
  },
  {
    name: "Bianca",
    age: 16,
    city: "Monaco"
  }
];

const checking = applications => {
  var good = [];
  for (var i = 0; i < applications.length; i++) {
    var person = applications[i];
    if (person.age >= 18) {
      good.push(person);
      console.log(
        `${person.age} age ${person.name} from ${
          person.city
        } are accepted to competition`
      );
    }
  }
  return good;
};

console.log(checking(ladies));

// callbacks

const canVote = function(person, voteAge) {
  if (person.age > voteAge) {
    console.log(`Yep, ${person.name} can vote`);
  } else {
    console.log(
      `No, ${person.name} can't vote, but will can in ${2018 +
        (voteAge - person.age)}`
    );
  }
};

canVote(ladies[0], 18);

// переменные передаются в получаемую функцию functionName
const theyVote = functionName => functionName(ladies[1], 18);

theyVote(canVote);

let otherArr = ladies.map(name => `${name.name}'s application received`);
console.log(otherArr);

const yellowLog = str =>
  console.log(`%c${str}`, `font-weight:bold; background: yellow`);

/* В ролик от Антона Шеина есть простые задачи, и почему бы их не сделать*/
yellowLog("Now homework");

/* 1. Написать функцию, которая получает на вход 2 числа и возвращает их сумму; */
const justMultiply = (a, b) => a * b;
console.log(`Результат умножения 5 на 11 = ${justMultiply(5, 11)}`);

/* 2. Написать эту функцию в четырёх разных формах: 
     — классической;
     — современной;
     — стрелочной;
     — сокращённой стрелочной. */

function multiplierClassic(a, b) {
  return a * b;
}
console.log(multiplierClassic(5, 12));

const multiplierModern = function(a, b) {
  return a * b;
};
console.log(multiplierModern(5, 13));

const multiplierArrowFunc = (a, b) => {
  return a * b;
};
console.log(multiplierArrowFunc(5, 14));

const multiplierArrowFuncShort = (a, b) => a * b;
console.log(multiplierArrowFuncShort(5, 15));

/* 3. Вывести в консоль все числа из массива [15, 10, 8, 256], умноженные на 10; */

let someArr = [15, 10, 8, 256];
console.log(someArr.map(el => el * 10));

/* 4. Сделать так, чтобы все круги из примера были  в красной гамме; */

function generateCircle() {
  let circle = document.createElement("div");
  // Чтобы задать тегу класс, нужно использовать свойство className
  circle.className = "circle";
  // Возвращаем DOM-элемент для дальнейших операций с ним
  return circle;
}

// Вспомогательная функция для генерации целых случайных чисел
//                    ↓ параметром передаём максимальное значение случайного числа
function getRandom(interval) {
  //              ↓округление  ↓случайное число от 0 до 1
  return Math.round(Math.random() * interval);
}

// Задаём цвет для круга
//                           ↓ параметром нужно будет передать созданный ранее DOM-элемент
function colorTheCircle(domElement) {
  //                 ↓ в CSS это свойство звучит как backbround-color
  domElement.style.backgroundColor = `
  rgba(${150 + getRandom(105)}, ${getRandom(5)}, ${getRandom(
    5
  )}, ${Math.random()})`;
}

// Задаём координаты круга на старнице
function placeTheCircle(domElement) {
  domElement.style.left = `${getRandom(100)}vw`;
  domElement.style.top = `${getRandom(100)}vh`;
}

// Задаём размеры круга
function sizeTheCircle(domElement) {
  let size = getRandom(100);
  domElement.style.width = `${size}px`;
  domElement.style.height = `${size}px`;
}

// А теперь в цикле генерируем и расскрашиваем круги
//                ↓ 100 кругов, попробуйте поменять на 1000
for (let i = 0; i < 100; i++) {
  let circle = generateCircle();
  colorTheCircle(circle);
  sizeTheCircle(circle);
  placeTheCircle(circle);
  // Размещаем созданный и расскрашенный DOM-элемент в документе
  document.body.appendChild(circle);
}
