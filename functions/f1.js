//// Examples of functions that I've used thus far

// replace() function

let slogan = "We like sports and we don't care who knows";
let newSlogan = slogan.replace('sports', 'coding');
console.log(newSlogan);

// join() function

let arraybees = ['A', 'B', 'C', 'D', 'E', 'F'];
let arraybaybees = arraybees.join('');
console.log(arraybaybees);

// random()

let randomNumber = Math.random();
console.log(randomNumber);

/// Code along with examples

function random(number) {
    return Math.floor(Math.random()*number)
}

/// Invoke function

function myFunction() {
    alert('Hello');
}

myFunction();

/// Optional parameters

let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
console.log(madeAString);

let madeAnotherString = myArray.join();
console.log(madeAnotherString);

/// Specify default value

let name;

function hello(name = 'Phil') {
    console.log(`Hello, ${name}!`);
}

hello();
hello('Simon');

/// Anonymous function syntax example

(function() {
    alert(hello)
})

/// Anonymous function

// Instead of:

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);

// Use this:

textBox.addEventListener('keydown', function(event) {
    console.log(`You pressed "${event.key}".`); 
});

/// Arrow functions

textBox.addEventListener('keydown', (event) => {
    console.log(`You pressed "${event.key}".`); 
});

// If only one parameter and one curly bracket

textBox.addEventListener('keydown', (event) => console.log(`You pressed “${event.key}”.`));


/// With arrays

const originals = [1, 2, 3];
const doubled = originals.map((item) => item * 2);
console.log(doubled)




