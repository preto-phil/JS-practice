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

module.exports.capitalize = capitalize;
module.exports.reverse = reverse;
module.exports.calculator = calculator;
module.exports.ceaserCipher = ceaserCipher;
