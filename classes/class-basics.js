// Class syntax

class MyClass {
  // Class methods
  constructor() {}
  method1() {}
  // etc
}

// Call

class User {
  constructor(name) {
    this.name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Usage:
let user = new User('John');
user.sayHi();

// Introspection 

// A more concrete way of creating a class
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi


// Rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default
// thus not necessary to create it

// 2. Add the method to prototype
User.prototype.sayHi = function() {
  alert(this.name);
}

// Usage:
let myUser = new User('John');
user.sayHi();


// Make dynamic classes

function makeClass(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

// Create a new class
let User = makeClass('Hello');

new User().sayHi();


// Classes using getters/setters

class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert('Name is too short.');
      return;
    }
    this._name = value;
  }
}

user = new User('John');
alert(user.name);

user = new User("Abe");


// Computed names example

class User {
  ['say' + 'Hi']() {
    alert('Hello');
  }
}

new User().sayHi();


// Class fields

class User {
  name = 'John';

  sayHi() {
    alert(`Hello ${this.name}!`);
  }
}

new User().sayHi();


// Function binding

class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    alert(this.value);
  }
}

let button = new Button('hello');
setTimeout(button.click, 1000);