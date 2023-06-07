function capitalize(word) {
  let firstLetter = word[0].toUpperCase();
  let restOfWord = word.slice(1).toLowerCase();
  return `${firstLetter}${restOfWord}`;
}

module.exports = capitalize;