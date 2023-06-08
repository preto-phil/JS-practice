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

module.exports.capitalize = capitalize;
module.exports.reverse = reverse;

