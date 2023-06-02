//// Examples - get info from a server, process it and return a promise

// Server info

const server = {
  people: [
    {
      name: "Odin",
      age: 1820,
    },
    {
      name: "Thor",
      age: 1735,
    },
    {
      name: "Freyja",
      age: 1729,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

// Example without async and await

/* function getPersonInfo(name) {
  return ServiceWorkerRegistration.getPeople().then(people => {
    return people.find(person => { return person.name === name });
  });
} */

// Example using async and await

async function getPersonInfo(name) {
  const people = await server.getPeople();
  const person = people.find(person => { return person.name === name });
  return person;
}


//// Ways of declaring a asynchronous function 

// Function expression
const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
} 

// In a array
anArray.forEach(async item => { 
  // do something asynchronously for each item in 'anArray'
  // one could also use .map here to return an array of promises to use with 'Promise.all()'
});

server.getPeople().then(async people => {
  people.forEach(person => {
    // do something asynchronously for each person
  });
});


/* 
Handling errors
*/

// Appending .catch() method
asyncFunctionCall().catch(err => {
  console.log(err);
});

// Using try/catch
async function getPersonInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you like -- any way you need 
  }
}