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

  // Stappe:
  // Split string na array van enkele karakters 
  // Convert characters van array na ascii code
  // Doen die cryptography - plus minus key ( for loop of array method)
  // Convert array characters terug na letters
  // Convert array terug na string
  // Return string


function ceaserCipher(string, key) {
  let asciiString = [];

  for (let i = 0; i < string.length; i++) {
    asciiString[i] = string.charCodeAt(i);
  }

  let newAsciiString = [];

  for (let i = 0; i < string.length; i++) {
  
    if (!(asciiString[i] >= 32 && asciiString[i] <= 47 || asciiString[i] >= 58 && asciiString[i] <= 64)) {

      if (asciiString[i] >= 65 && asciiString[i] <= 90) {
        newKey = asciiString[i] + key;

        if (newKey < 65) { newKey = 91 + key};
        if (newKey > 90) { newKey = 64 + key};

        newAsciiString[i] = newKey;

      } else if (asciiString[i] >= 97 && asciiString[i] <= 122) {
        newKey = asciiString[i] + key;
  
        if (newKey < 97) { newKey = 123 + key};
        if (newKey > 122) { newKey = 96 + key};

        newAsciiString[i] = newKey;
        
      } else if (asciiString[i] >= 48 && asciiString[i] <= 57) {
        newKey = asciiString[i] + key;
  
        if (newKey < 48) { newKey = 58 + key};
        if (newKey > 57) { newKey = 47 + key};

        newAsciiString[i] = newKey;
      }

    } else {
      newAsciiString[i] = asciiString[i];
    }

  }

  console.log(newAsciiString);

  let reconstituted = String.fromCharCode.apply(null, newAsciiString);

  console.log(reconstituted);
  return reconstituted

}


module.exports.capitalize = capitalize;
module.exports.reverse = reverse;
module.exports.calculator = calculator;
module.exports.ceaserCipher = ceaserCipher;
