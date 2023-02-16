////// Task 1

// Create empty object user
let user = {};

// Add the property name with the value John.
user.name = "John";


// Add the property surname with the value Smith.
user.surname = "Smith";

// Change the value of the name to Pete.
user.name = "Pete";

// Remove the property name from the object.
delete user.name;


////// Task 2

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started there is a property
        return false;
    }
    return true;
}


////// Task 3

// Sum Object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum =+ salaries[key];
}

alert(sum);


////// Task 4

// Multiply numeric property values by 2

function multiplyNumeric() {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] * 2;
        }
    }
}