//// String Methods

/// String length

let txt = 'gyggftyfytfytf';
let length = txt.length;
console.log(length);


/// Extracting string parts

// Slice

let str = "Apple, Banana, Kiwi";
let part = str.slice(7,13);
console.log(part);

// Negative slice

let part2 = str.slice(-12, -6);
console.log(part2);

// End slice omitted

let part3 = str.slice(15);
console.log(part3);

// Substring

let part4 = str.substring(7,13);
console.log(part4);

// Substr

let part5 = str.substr(7, 6);
console.log(part5);


/// Replace

let text = "Philip is baas";
let newText = text.replace("Philip", "Ek")
console.log(newText);

// Replace all matches

let text2 = "Philip is Philip";
let newText2 = text2.replace(/Philip/g, "Life")
console.log(newText2);

// Insensitive and replace all

let text3 = "PHIL is phil";
let newText3 = text3.replace(/phil/ig, "Life")
console.log(newText3);

/// Convert string to Uppercase

let t1 = "Hello World!";
let t2 = t1.toUpperCase();
console.log(t2);

/// Convert string to Lowercase

let t3 = t1.toLowerCase();
console.log(t3);

/// Concatenate strings

let cat = "Hello";
let cat1 = "World";
let cat2 = cat.concat(", ", cat1);
console.log(cat2);

