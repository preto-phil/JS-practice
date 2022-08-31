////// Conditionals 2

//// if...else example 1

let fruit = 'apple';

if (fruit) {
    console.log('Yay, fruit!')
} else {
    console.log('No.... no fruit!')
}

//// if...else example 2

let shoppingDone = false;
let childAllowance;

if (shoppingDone == true ) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}

console.log(childAllowance)

//// if...else example 3

shoppingDone = true;

if (shoppingDone) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}

console.log(childAllowance)

//// Logical Operators example

let iceCreamVanOutside;
let houseStatus = 'on fire';

// OR

if (iceCreamVanOutside || houseStatus === 'on fire') {
    console.log('You should leave the house quickly.');
  } else {
    console.log('Probably should just stay in then.');
  }

// Not

if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
    console.log('Probably should just stay in then.');
  } else {
    console.log('You should leave the house quickly.');
  }






//// else if example

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}





