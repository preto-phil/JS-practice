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

/* Problem 4: All */ 

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


/* Problem 7: Parse multi-dimensional array */


/* Problem 8: Sum Squares */


/* Problem 9: Replicate */