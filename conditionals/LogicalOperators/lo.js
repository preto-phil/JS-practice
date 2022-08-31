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



//// And &&



//// Not !


