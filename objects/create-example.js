// Basic Object create example

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman} `)
  }
};

const me = Object.create(person);

me.name = "Philip";
me.isHuman = true;

me.printIntroduction();

