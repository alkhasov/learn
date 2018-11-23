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

function Mushroom(name) {
  this.name = name;
}

let blueOne = new Mushroom("Blue Block");
let redOne = new Mushroom("Red Rock");

console.log(blueOne.name, "and", redOne.name);

let track = new class {
  play() {
    return "Playing";
  }
}();

console.log(track.play());

// class notaton

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

Rabbit.prototype.teeth = "small";

console.log(killerRabbit.teeth);

killerRabbit.teeth = "long";

console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);

// Map

let aviaMiles = {
  Sergey: 900,
  Marina: 1480,
  Julia: 1280
};

// console.log(`Julia have ${aviaMiles.Julia} bonus miles`);

let ages = new Map();

ages.set("Sergey", 20);
ages.set("Marina", 22);
ages.set("Julia", 19);

// console.log(`Marina is ${ages.get("Marina")} years old`);

let hasJason = ages.has("Jason");

// if (!hasJason) console.log(`There is no Jason `);

Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));

let sym = Symbol("name");
console.log(sym == Symbol("Name"));

Rabbit.prototype[sym] = 105;
console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString");

Array.prototype[toStringSymbol] = function() {
  return `${this.length} is array length`;
};

console.log([1, 5].toString());
console.log([1, 5][toStringSymbol]());

let okIterator = "OK"[Symbol.iterator]();

console.log(okIterator.next());

console.clear();

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)
    };

    this.x++;

    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }

    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);

for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}

class Line {
  constructor(centimeter) {
    this.cm = centimeter;
    this.m = centimeter / 100;
  }

  set centimeters(value) {
    this.cm = value;
    this.m = value / 100;
  }

  set meters(value) {
    this.cm = value * 100;
    this.m = value;
  }

  get centimeters() {
    return this.cm;
  }

  get meters() {
    return this.m;
  }

  static formKilometers(value) {
    return new Line(value * 1000 * 100);
  }
}

let line = new Line(50);
// console.log(line.meters);
line.meters = 6;
// console.log(line.centimeters);

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrixA = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
// console.log(matrixA.get(2, 3));

// console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
// → true
// console.log(new SymmetricMatrix(2) instanceof Matrix);
// → true
// console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// → false
// console.log([1] instanceof Array);
// → true

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  get() {
    return { x: this.x, y: this.y };
  }

  plus(vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }

  minus(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

let vex = new Vec(1, 2);
vex.set(3, 4);
console.log(vex.length);

class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (this.group.indexOf(value) == -1) {
      this.group.push(value);
    }
  }

  delete(value) {
    this.group = this.group.filter(el => el !== value && el);
  }

  has(value) {
    if (this.group.indexOf(value) != -1) return true;
    else return false;
  }

  get(index) {
    return this.group[index];
  }

  get length() {
    return this.group.length;
  }

  static from(array) {
    let temp = new Group();
    for (let a of array) {
      temp.add(a);
    }
    return temp;
  }
}

let digits = new Group();
digits.add(5);
digits.add(3);
digits.has(5);
digits.delete(5);
digits.has(5);

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.group.length == 0) {
      return false;
    } else if (this.group.length == this.index) {
      return { value: this.group.get(this.index), done: true };
    } else if (this.index !== 5) {
      this.index++;
      return { value: this.group.get(this.index - 1), done: false };
    } else {
      return false;
    }
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

let grouppe = Group.from([2, 4, 5, 7]);

for (let g of grouppe) {
  console.log(g);
}
