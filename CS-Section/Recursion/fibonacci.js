/* Non recursion */

function fibs(n) {
  let array = [];

  let a = 0;
  let b = 1;
  let c = a + b;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      array.push(a);
    } else {
      array.push(c);
      b = a;
      a = c;
      c = b + a;
    }
  }
  console.log(array);
}

/* Recursive version */

function fibsRec(n) {
  let array = [];

  if (n == 1) return 0;
  if (n == 2) return 1;

  let x = fibsRec(n-1) + fibsRec(n-2);

  array.push(x);

  console.log(array) 
}