let animal = {
  eats: true,
  walk() {
    console.log('Animal walk')
  }
};

let rabbit = {
  jumps: true,
	__proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};
  
// we can find both properties in rabbit now:
console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); // true

// walk is taken from the prototype
longEar.walk();
console.log(longEar.jumps);

rabbit.talk = function() {
	console.log("Rabbit! Bounce-bounce!")
};

rabbit.talk();

//// Accessor properties

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected


//// for...in loop

// Object.keys only returns own keys
console.log(Object.keys(rabbit));

// for..in loops over both own and inherited keys
for(let prop in rabbit) console.log(prop);

// Filter out inherited properties
for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}