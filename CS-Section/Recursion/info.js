/* Task 1: Sum To */

// Using recursion
function sumTo(n) {
  return n === 1 ? 1 : n + sumTo(n - 1);
}

// Using loop
function sumToTwo(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// Using arithmetic formula
function sumToThree(n) {
  return n * (1 + n) / 2;
}

/* Task 2: Factorial */

// Using recursion
function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

/* Task 3: Fibonacci */

// Using recursion
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// Using for loop
function fibTwo(n) {
  let a = 0;
  let b = 1;
  let c;
  for (let i = 1; i <= n; i++) {
    c = b + a;
    b = a;
    a = c;
  }
  return c;
} 

/* Task 4: Linked list */

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

function printListRecursion(list) {
  console.log(list.value);

  if (list.next) {
    printListRecursion(list.next);
  }
}

/* Task 5: Reversed Link list */

function reversePrintList(list) {
  if (list.next) {
    reversePrintList(list.next);
  }
  console.log(list.value);
}

function printReverseList(list) {
  let array = [];
  
  while (list) {
    array.push(list.value);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[1]);
  }
}