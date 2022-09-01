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



//// Another if statement

let year = prompt("In what year did the Springboks first participate in the Rugby World Cup?");

if (year === '1995') {
  alert("You are correct!");
} else {
  alert("Hah, you are so wrong!")
}


//// Number example

let number = prompt('Number?');

number = Number(number);

if (number > 0) {
  alert('1');
} else if (number < 0) {
  alert('-1');
} else {
  alert('0');
}


//// name example

let name = prompt("What's the \"Offical\" name of JavaScript?")

if (name == 'ECMAScript') {
  alert("Right!");
} else {
  alert("You don't know? \"ECMAScript\"!")
}



//// Switch

// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
let day = prompt('Choose between 0 and 6');
day = Number(day);

switch (day) {
	case 0:
		console.log("It's Sunday, time to relax!");
		break;
	case 1:
		console.log("Happy Monday!");
		break;
	case 2:
		console.log("It's Tuesday. You got this!");
		break;
	case 3:
		console.log("Hump day already!");
		break;
	case 4:
		console.log("Just one more day 'til the weekend!");
		break;
	case 5:
		console.log("Happy Friday!");
		break;
	case 6:
		console.log("Have a wonderful Saturday!");
		break;
	default:
		console.log("Something went horribly wrong...");
}

//// Grade 

let grade = 84;

switch (true) {
  case grade >= 90:
    console.log('A');
    break;

  case grade >= 80:
    console.log('B');
    break;
  
  case grade >= 70:
    console.log('C');
    break;

  case grade >= 70:
    console.log('D');
    break;

  default:
    console.log('You Failed')
}

// Get number corresponding to the current month, with 0 being January and 11 being December
let month = prompt("Choose a month and I'll tell what season it's in... January is month 0 and December month 11")
month = Number(month);

switch (month) {
	// January, February, March
	case 0:
	case 1:
	case 2:
		console.log("Winter");
		break;
	// April, May, June
	case 3:
	case 4:
	case 5:
		console.log("Spring");
		break;
	// July, August, September
	case 6:
	case 7:
	case 8:
		console.log("Summer");
		break;
	// October, November, December
	case 9:
	case 10:
	case 11:
		console.log("Autumn");
		break;
	default:
		console.log("Something went wrong.");
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





