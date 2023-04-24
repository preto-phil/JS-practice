// Factory Functions

const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello }
}

const jeff = personFactory('jeff', 27);

console.log(jeff.name);
console.log(jeff.age);

jeff.sayHello();

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(name, color, number, food); // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({name, color, number, food});
 // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }


// Using scope in game example

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {

  };
  const damage = x => {
    health -= x;
    if (health = 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`)
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
}


// Inheritance 

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);

const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return {sayName};
}

const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const {sayName} = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return {sayName, doSomethingNerdy};
}

const joe = Nerd('joe');

joe.sayName(); // my name is joe
joe.doSomethingNerdy(); // nerd stuff

// Using assign

const Geek = (name) => {
  const prototype = Person(name);
  const doSomethingGeeky = () => console.log('Geek stuff');
  return Object.assign({}, prototype, {doSomethingGeeky})
}

const jake = Geek('jake');

jake.sayName();
jake.doSomethingGeeky();

// Module calculator
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); //

// Creating a module
(function() {
  'use strict';
  // Code here
  // All functions and variables are scoped to this level
})();

// Exporting a module
const myModule = (function() {
  'use strict';
  
  const _privateProperty = 'Hello World!';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  return {
    publicMethod: function() {
      _privateMethod();
    }
  };
})();

// Calling module content
myModule.publicMethod();

// Revealing module pattern
const myRevealingModule = (function() {
  'use strict';
  
  const _privateProperty = 'Hello World!';
  const publicProperty = 'I am a public property!';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty
  };
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.publicProperty); // outputs 'I am a public property'
console.log(myModule._privateProperty); // is undefined protected by the module closure
myModule._privateMethod(); // is TypeError protected by the module closure