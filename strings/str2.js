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

/// Trimming strings

// Trim both sides

let ttext1 = "      Hello World!      ";
let ttext2 = ttext1.trim();
console.log(ttext2);

// Trim only the start

let ttext3 = ttext1.trimStart();
console.log(ttext3);

// Trim only the end

let ttext4 = ttext1.trimEnd();
console.log(ttext4)

/// String Padding

// Padding at start - Example 1

let padtext = "5";
let padded0 = padtext.padStart(4, "x");
console.log(padded0);

// Example 2

let padded1 = padtext.padStart(3, " ");
console.log(padded1);

// Padding at end 

let padded2 = padtext.padEnd(5, "~");
console.log(padded2);


/// Extracting string characters

// charAt()

let string1 = "hello world";
let char0 = string1.charAt(0);
console.log(char0)

// charCodeAt()

let charcode0 = string1.charCodeAt(0);
console.log(charcode0);

// Property access

let pa1 = string1[0];
console.log(pa1);

/// Splitting strings into arrays

let arrayText = "TEFL, TOP, Guitar, Exercise | Diet | Sleep"
let a1 = arrayText.split(" ")
let a2 = arrayText.split(",")
let a3 = arrayText.split("|")
let a4 = arrayText.split("")
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

///
