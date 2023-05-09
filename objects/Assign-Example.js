// Basic assignment example

const target = { a: 1, b: 2};
const source = { c: 4, d: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

console.log(returnedTarget === target);


// Cloning an object

const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy);

// Merging objects

const obj1 = { a: 1 };
const obj2 = { b: 1 };
const obj3 = { c: 1 };

const obj4 = Object.assign(obj1, obj2, obj3);

console.log(obj4);