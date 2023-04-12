
// Create object
let x = {};

// Create object using constructor
let y = new Object ();

console.log(Object.getPrototypeOf(x));
console.log(y.__proto__);

console.log(x.toString());


// Create array
let a = [];

// Create as a constructor
let b = new Array() 

console.log(a.__proto__);

a.__proto__ === Array.prototype;            // true
a.__proto__.__proto__ === Object.prototype; // true

// Constructor functions

// Initialize a constructor function for a new Hero
function Hero(name, level) {
	this.name = name;
	this.level = level;
}

let heroA = new Hero('Bjorn', 1);
console.log(heroA);

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

console.log(heroA.greet());

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

console.log(hero1.attack());
console.log(hero2.greet());
console.log(hero2.heal());
