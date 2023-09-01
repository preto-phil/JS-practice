/* Problem 1: Sum */

function sumUp(n) {
  if (n == 1) return 1;
  return n + sumUp(n-1);
}

/* Problem 2: Power */

function pow(n, p) {
  if (p == 0) return 1;
  return n * pow(n, p - 1);
}

/* Problem 3: Factorial */

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n-1);
}

/* Problem 4: Check all values */ 

function all(array, callback) {
  if (array.length == 0) return true;  

  return (callback(array.shift())) ? all(array, callback) : false;
}

/* Problem 5: Array product */

function arrayProduct(array) {
  if (array.length === 0) return 1;

  return array.shift() * arrayProduct(array);
}

/* Problem 6: Search JS Object */

function contains(obj, value) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') return contains(obj[key], value);
    if (obj[key] === value) return true;
  }
  return false;
}

/* Problem 7: Parse multi-dimensional array */

function totalIntegers(array) {
  if (array.length === 0) return 0;

  let intTotal = 0;
  let firstItem = array.shift();

  if (Array.isArray(firstItem)) intTotal += totalIntegers(firstItem);
  if (Number.isInteger(firstItem)) intTotal += 1;

  return intTotal + totalIntegers(array);
}

/* Problem 8: Sum Squares */

function sumSquares(array) {
  if (array.length === 0) return 0;

  let sum = 0;
  let item = array.shift();

  if (Array.isArray(item)) sum += sumSquares(item);
  if (Number.isInteger(item)) sum += (item * item);

  return sum + sumSquares(array);  
}

// of solution method

function SumSquares(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}

/* Problem 9: Replicate */

function replicate(times, num) {
  if (times <= 0) return [];

  return [num].concat(replicate(times - 1, num));
}