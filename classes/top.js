// Getters and setters are denoted by object literals

let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};

// Full Name example

let user = { 
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

user.fullName = "Alice Cooper";

alert(user.name);
alert(user.surname);

// Pass a descriptor with get and set using defineProperty

let user2 = {
  name: 'Philip',
  surname: 'Pretorius',
};

Object.defineProperty(user2, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(' ');
  }
});

console.log(user2.fullName);

for (let key in user2) alert(key);

// Smarter getters/setters - using internal or private properties 

let user3 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user3.name = 'Pete';
console.log(user3.name);

user3.name = "Joe";

// Using for compatibility

function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User('John', 25);
console.log(john.age)

function User2(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
};

let Simon =  new User2('Simon', new Date(1992, 6, 1));

console.log(Simon.birthday);
console.log(Simon.age);
