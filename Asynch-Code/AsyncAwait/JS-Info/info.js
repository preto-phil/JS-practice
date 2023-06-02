/*
Async Functions 
*/

// This
async function f() {
  return 1;
}

// Gets the same result as this
async function g() {
  return Promise.resolve(1);
}

f().then(alert); // 1
g().then(alert); // 1


/* 
Await
*/

// Only works inside async functions
let value = await promise;

// Example of a promise that resolves after 1 second
async function h() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 100)
  });

  let result = await promise;

  alert(result);
}

h();


/* 
Show Avatar example
*/

async function showAvatar() {

  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  //read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.showAvatar.url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds 
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();


/* 
Accepting "thenables" 
*/

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  alert(result);
}

f();


/* 
Async class methods
*/

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(alert); // 1 (this is the same as (result => alert(result)))


/* 
Error handling
*/

// This...
async function e() {
  await Promise.reject(new Error('Whoops!'));
}

// Is the same as this
async function e() {
  throw new Error('Whoops!');
}

// Real example
async function e() {
  try {
    let response = await fetch('http://no-such-url');
    let user = await response.json();
  } catch (err) {

    alert(err);
  }
}

// If not using try/catch
async function f() {
  let response = await fetch('http://no-such-url');
}

f().catch(alert);


/* 
Async/await with Promise.all
*/

let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  // etc ...
]);