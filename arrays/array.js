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
