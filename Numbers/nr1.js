// Numbers

// Basic Arithmetic

    // literals

    let x = 100 + 50;

    // variables

    let y = "a" + "b";

    // expression

    let z = (100 + 50) * "c"

// Numbers with decimals

    let decimal = 15.50;

    // Period, not comma

// Numbers with scientific notation

    let exponent = 2e10;

// NaN

    let one = 1;
    let two = NaN;
    let three = one + two;
    // Result = NaN
    console.log(three)

// Infinity

    let myNumber = 2;
    // Execute until Infinity
    while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    }
    // Result
    console.log(myNumber);
    
    // or divide by 0

    let a1 = 2;
    let a2 = 0;
    let a3 = a1/a2;

    // Result = Infinity
    console.log(a3);

// Hexadecimal 

    let hex = 0xFF;
    
    // starts with 0x

// JS numbers as objects

    let obj = new Number(500);

    // Result
    console.log(obj);

// Example from mdn

    const myInt = 5;
    const myFloat = 6.667;
    myInt;
    myFloat;
    console.log(
        typeof myInt,
        typeof myFloat
    )


// Round const decimals

    const lotsOfDecimal = 1.766584958675746364;
    lotsOfDecimal;
    const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
    twoDecimalPlaces;
    console.log(twoDecimalPlaces);

// Converting strings to numbers

    let myString = '74';
    myString += 3;
    console.log(myString);
    // Gives wrong result, 743
    console.log(typeof myString);
    // Type of result string

    myString = '74';
    myString = Number(myString) + 3;
    console.log(myString);

// Basic Arithmetic 2.0

    console.log(60 % 3);
    console.log(5 * 2 * 1.5);
    let num1 = 5;
    let num2 = 2;
    console.log(num1 % num2 * num1);
    console.log((num1 - num2) / 6 * 2);

// Increment and decrement

    num1++;
    console.log(num1);
    num2--;
    console.log(num2);
    ++num1;
    console.log(num1);
    // Updates value with each increment/decrement

// Assignment operators

    let num3 = 4;
    console.log(num3 += 2);
    num3 = 4;
    console.log(num3 -= 2);
    num3 = 4;
    console.log(num3 *= 2);
    num3 = 4;
    console.log(num3 /= 2);

// Comparison operators

    console.log(5 === 4);
    console.log(5 !== 4);
    console.log(5 > 4);
    console.log(5 < 4);
    console.log(5 >= 4);
    console.log(5 <= 4);

//// Button and paragraph example

//    const btn = document.querySelector('button');
//   const txt = document.querySelector('p');
//
//    btn.addEventListener('click', updateBtn);

//    function updateBtn() {
//    if (btn.textContent === 'Start machine') {
//        btn.textContent = 'Stop machine';
//       txt.textContent = 'The machine has started!';
//    } else {
//        btn.textContent = 'Start machine';
//        txt.textContent = 'The machine is stopped.';
//    }
//    }