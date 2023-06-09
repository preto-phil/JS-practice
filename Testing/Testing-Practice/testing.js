function capitalize(word) {
  let firstLetter = word[0].toUpperCase();
  let restOfWord = word.slice(1).toLowerCase();
  return `${firstLetter}${restOfWord}`;
}

function reverse(word) {
  let r = '';
  for (let i = word.length - 1; i >= 0; i--) {
    r += word[i];
  }
  return r
}

const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  division: (x, y) => x === 0 ? 0 : x / y,
  multiply: (x, y) => x * y,
}


// Item 4: Ceaser Cipher
function ceaserCipher(string, key) {
  let asciiString = [];

  // Store equivalent ascii code of each character in array
  for (let i = 0; i < string.length; i++) {
    asciiString[i] = string.charCodeAt(i);
  }

  let newAsciiString = [];

  // Loop over each item in the string
  for (let i = 0; i < string.length; i++) {
  
    // Only change letters and numbers
    if (!(asciiString[i] >= 32 && asciiString[i] <= 47 || asciiString[i] >= 58 && asciiString[i] <= 64)) {

      // Capital Letters
      if (asciiString[i] >= 65 && asciiString[i] <= 90) {
        newKey = asciiString[i] + key;
        // If less than A
        if (newKey < 65) { newKey = 91 + key};
        // If more than Z
        if (newKey > 90) { newKey = 64 + key};
        newAsciiString[i] = newKey;

      } 
      
      //  Small letters
      else if (asciiString[i] >= 97 && asciiString[i] <= 122) {
        newKey = asciiString[i] + key;
        // If less than a
        if (newKey < 97) { newKey = 123 + key};
        // If more than z
        if (newKey > 122) { newKey = 96 + key};
        newAsciiString[i] = newKey;
        
      } 
      
      // Numbers
      else if (asciiString[i] >= 48 && asciiString[i] <= 57) {
        newKey = asciiString[i] + key;
        // If less than 0
        if (newKey < 48) { newKey = 58 + key};
        // If more than 9
        if (newKey > 57) { newKey = 47 + key};
        newAsciiString[i] = newKey;
      }

    } 
    
    // Non letters and numbers stay the same
    else {
      newAsciiString[i] = asciiString[i];
    }

  }

  // Convert array of character codes into a string
  let reconstituted = String.fromCharCode.apply(null, newAsciiString);

  return reconstituted;

}


// Test 5: Analyze array

function analyzeArray(array) {

  let sum = 0;

  array.forEach(num => {
    sum += num;
  });
  let ave = sum / array.length;

  return {
    average: ave,
    min: Math.min.apply(null, array),
    max: Math.max.apply(null, array),
    lentgh: array.length,
  }
}

module.exports.capitalize = capitalize;
module.exports.reverse = reverse;
module.exports.calculator = calculator;
module.exports.ceaserCipher = ceaserCipher;
module.exports.analyzeArray = analyzeArray;