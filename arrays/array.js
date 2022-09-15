////// Arrays

//// Create an array of car brands

// Literal Method

const germanCarBrands = ['Volkswagen', 'Mercedes', 'BMW', 'Opel']

console.log(germanCarBrands[0]);

// Literal Method with multiple lines 

const swedishCarBrands = [
    'Volvo', 
    'Saab', 
    'Scania'
];

console.log(swedishCarBrands[1]);

// Literal Method with elements provided later

const frenchCarBrands = [];
frenchCarBrands [0] = 'Renault';
frenchCarBrands [1] = 'Citroen';
frenchCarBrands [2] = 'Peugeot';

console.log(frenchCarBrands[2]);

//// Change element in array

germanCarBrands [3] = 'Audi';

console.log(germanCarBrands);

//// Array properties and methods

// Length

let gcbLength = germanCarBrands.length;

console.log(gcbLength);

// Sort

let scbSort = swedishCarBrands.sort();

console.log(scbSort);

//// Accessing arrays

console.log(germanCarBrands[0]);
console.log(frenchCarBrands[frenchCarBrands.length - 1]);

//// Loops with Arrays

// for.Each method

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
text += "<li>" + value + "</li>";
}

document.getElementById("fruit").outerHTML = text;

// for loop method

const vegetables = ['Broccoli', 'Butternut', 'Spinach', 'Potatoes', 'Carrots'];

let veglength = vegetables.length;

let list = "<ul>";

for (let i = 0; i < veglength; i++) {
    list += "<li>" + vegetables[i] + "</li>";
}

list += "</ul>";

document.getElementById("vegetables").outerHTML = list;

//// Adding Array Elements

// Using push() method

germanCarBrands.push('Opel');

console.log(germanCarBrands);

// Using length property

germanCarBrands[germanCarBrands.length] = "Porsche";

console.log(germanCarBrands);

//// new Array faults

// Making an array with one element

const a = [42069666];

const b = new Array(42069666);

console.log(a);
console.log(b);

//// Test whether Array

// Array.isArray()

console.log(Array.isArray(frenchCarBrands))

// instanceof

console.log(swedishCarBrands instanceof Array);

//// JS Array Methods

// toString()

console.log(vegetables.toString());

// join ()

console.log(vegetables.join(" *** "));

// pop()

console.log(vegetables.pop());

// push()

console.log(vegetables.push());

// shift()

console.log(vegetables.shift());

// unshift()

console.log(vegetables.unshift('Broccoli'));

// concat()

console.log(vegetables.concat(fruits));

// concat() multiple arrays

const euroCarBrands = germanCarBrands.concat(swedishCarBrands, frenchCarBrands);

console.log(euroCarBrands)

// concat() values

console.log(vegetables.concat('Pumpkin'));

// Adding with splice()

console.log(fruits.splice(2, 0, 'Apple', 'Guava'));

// Removing splice() with new array created

const splicedFruit = fruits.splice(0, 2);

console.log(splicedFruit)

// slice()

console.log(fruits.splice(1, 3));

const slicedFruit = fruits.splice(1);

console.log(slicedFruit);

// 