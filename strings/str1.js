//// Strings Practice

// Create a string

    const string = 'The revolutiion will not be televised';
    console.log(string);

    const badString = string;
    console.log(badString);    

// Single quotes vs double quotes

    const sgl = 'Single quotes.';
    const dbl = "Double quotes";
    console.log(sgl);
    console.log(dbl);

// Why different quotes used 

    const sglDbl = 'Would you eat a "fish supper"?';
    const dblSgl = "I'm feeling blue.";
    console.log(sglDbl);
    console.log(dblSgl);

// Escaping characters in a string

    const bigmouth = 'I\'ve got no right to take my place…';
    console.log(bigmouth);

// Concatenating strings
    
    const name = 'Chris';
    const greeting = `Hello, ${name}`;
    console.log(greeting); // "Hello, Chris"

// Concatenate using + operator

    const greeting2 = "Hello";
    const name2 = "John";
    console.log(greeting2 + ", " + name2); // "Hello, John"
    
    // Template literal method
    
    console.log(`${greeting2}, ${name2}`)

// Numbers and Strings

    const naam = "Front ";
    const nommer = 242;
    console.log(`${naam}${nommer}`); // "Front 242"

    // Number()
    
    const myString = '123';
    const myNum = Number(myString);
    console.log(typeof myNum);

    // .toString()

    const myNum2 = 123;
    const myString2 = myNum2.toString();
    console.log(typeof myString2);

// Expressions

    const song = 'Fight the Youth';
    const score = 9;
    const highestScore = 10;
    const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
    console.log(output);  // "I like the song Fight the Youth. I gave it a score of 90%."

// Multiple lines

    const output1 = `I like the song.
    I gave it a score of 90%.`;
    console.log(output1);  // I like the song.
                        // I gave it a score of 90%.

    // \n method

    const output2 = 'I like the song.\nI gave it a score of 90%.';
    console.log(output2);  // I like the song.
                        // I gave it a score of 90%.








