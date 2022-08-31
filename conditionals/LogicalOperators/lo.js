////// Logical Operators



//// Or ||

// Booleans

alert( true || true );  // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// Example with if statement

let hour = 9;

if (hour < 10 || hour > 18) {
    alert('Office is closed.');
}

// Example with more conditionals

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert('Office is closed.');
}

// Find truthy value

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// Get truthy value from a list of variables

let firstName = "";
let lastName = "";
let nickName = "Stifler";

alert(firstName || lastName || nickName || 'Clarence');

// Short-circuit evaluation

true || alert("not printed.");
false || alert("printed.")


//// And &&


// True example

hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert('Lunchtime.');
}

// False example

if (1 && 0) {
    alert("won't work because not truthy");
}

// Truthy vs Falsy

// First operand truthy, second falsy thus second returned
console.log(1 && 0);
console.log(1 && 5);

// First operand falsy, thus first operand returned
console.log(0 && 5);
console.log(null && 2);

// First falsy = null, thus null returned
console.log( 1 && 2 && 3 && null && 4 );

// No falsy so last operand is returned
console.log( 1 && 2 && 3 );


//// Not !

alert( !true ); // false
alert( !0 ); // true

// Double-Not

alert( !!"non-empty string" ); // true
alert( !!null ); // false


//// Range between

let age = 15;

if ( age >= 14 && age <= 90) {
    console.log('In age range.');
} else {
    console.log('Not in age range.');
}

//// Range outside

if (!(age >= 14 && age <= 90)) {
    console.log('Not in age range.');
} else {
    console.log('In age range.');
}

// Opsie 2

if ( age < 14 || age > 90) {
    console.log('Not in age range.');
} else {
    console.log('In age range.');
}

////////////////////////////////////////////////

//// Login Prompt

let userName = prompt("Who\'s there?", '');

if (userName === 'Admin') {
    
    let password = prompt("Password?", '');

    if (password == "" || password == null ) {
        alert("Canceled");
    } else if ( password == 'TheMaster') {
        alert('Welcome!');
    } else {
        alert('Wrong password');
    }

} else if (userName == "" || userName == null ) {
    alert('Cancel');
} else {
    alert('I don\'t know you');
}


//// Solution

//  let userName = prompt("Who's there?", '');

//  if (userName === 'Admin') {

//    let pass = prompt('Password?', '');

//    if (pass === 'TheMaster') {
//  alert( 'Welcome!' );
//    } else if (pass === '' || pass === null) {
//  alert( 'Canceled' );
//    } else {
//  alert( 'Wrong password' );
//    }

//  } else if (userName === '' || userName === null) {
//    alert( 'Canceled' );
//  } else {
//    alert( "I don't know you" );
//  }