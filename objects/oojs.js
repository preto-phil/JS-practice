//// Create a object person with properties and methods

const person = {
    name: {
        first: 'Bob',
        last: 'Smith',
    },
    age: 32,
    bio() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name.first}`);
    }
};

// Add new property using bracket notation

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

// Use 'this' in three different objects

const person1 = {
    name: "Chris",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};

const person2 = {
    name: "Deepti",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};

const person3 = {
    name: "Philip",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`)
    },
};


//// Create objects using functions

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`)    
    };
    return obj;
}

const salva = createPerson('Salva');
salva.name;
salva.introduceSelf();

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();


//// Create objects using constructors

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

const salvia = new Person('Salvia');
salvia.name;
salvia.introduceSelf();

const stevie = new Person("Stevie");
stevie.name;
stevie.introduceSelf();

