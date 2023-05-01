//// Different ways of creating a class

// Class Declaration

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area);
console.log([...square.getSides()]);

// Expression - class is anon but assigned to variable

const Rectangle = class{
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression - class has own name

const Rectangle2 = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


//// Static Properties

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Static field
  static displayName = "Point";
  // Static method
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.07...


//// Field Declarations

class Rec {
  // 
  height = 0;
  width;
  
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


//// Private class features 

class Rec {
  #height = 0;
  #width;
 
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}


//// Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`)
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`)
  }
}

const d = new Dog("Fluffy");
d.speak();

// 

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.