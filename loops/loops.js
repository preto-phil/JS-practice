////// Loops

//// Simple looping through collection with a for...of loop

const catArray = ['Lion', 'Tiger', 'Leopard', 'Cheetah', 'Caracal', 'Serval'];

for (const cat of catArray) {
    console.log(cat);
}

//// Using map()

function toUpper(string) {
    return string.toUpperCase();
}

const upperCats = catArray.map(toUpper);

console.log(upperCats);

//// filter()

function lCat(cat) {
    return cat.startsWith('L');
}

const filtered = catArray.filter(lCat);

console.log(filtered);

// With function expression

const filtered2 = catArray.filter((cat) => cat.startsWith('L'));
console.log(filtered2);

// with function expression

const upperCats2 = catArray.map((string) => string.toUpperCase());
console.log(upperCats2);

//// for loop

for (i = 0; i < catArray.length ; i++ ) {
    console.log(catArray[i]);
}

//// Favourite cats

const catNames = ['Pete', 'Biggles', 'Jasmine'];

let myFavouriteCats = "My cats are called ";

for (let i = 0; i < catNames.length; i++) {
    if (i === catNames.length - 1) {
        myFavouriteCats += `and ${catNames[i]}.`
    } else {
        myFavouriteCats += `${catNames[i]}, `
    }
}

console.log(myFavouriteCats); 

//// 