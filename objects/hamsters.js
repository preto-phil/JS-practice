
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};
  
let lazy = {
  __proto__: hamster
};
  
speedy.eat("apple");
alert( speedy.stomach );
lazy.eat("chocolate");
alert( lazy.stomach );