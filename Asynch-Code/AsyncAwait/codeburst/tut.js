// Old School Promise based code

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

function addPromise(x){
  return new Promise(resolve => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(x + a + b + c);
      	})
      })
    })
  });
}

addPromise(10).then((sum) => {
  console.log(sum);
});


// New school async/await code

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  console.log(a)
  console.log(b)
  console.log(c)
  return x + a + b + c;
}

addAsync(10).then((sum) => {
  console.log(sum)
})