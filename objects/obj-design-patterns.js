//// Objects as Design Patterns

// Example one

const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

// Example two

const playerOne = {
	name: "tim",
	marker: "X"
}

const playerTwo = {
	name: "jenn",
	marker: "O"
}


function printName(player) {
	console.log(player.name)
}

function gameOver(WinningPlayer) {
	console.log("Congratulations!")
	console.log(WinningPlayer.name + " is the Winner")
}

// Clearly Example two using objects is much superior


//// Object Constructors

function Player(name, marker) {
	this.name = name
	this.marker = marker
	this.sayName = function() {
		console.log(name)
	}
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName()
player2.sayName()


// Exercise

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function() {
		return(`${title} by ${author}, ${pages} pages, ${read}`)
	}
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'read')

console.log(theHobbit.info());


// Defining functions on the prototype of objects

function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function() {
  console.log(this.name)
}
Student.prototype.goToProm = function() {
  console.log(`Eh.. will you go to prom with me ${this.name}?`)
}

const student1 = new Student('Suze', '12')
student1.sayName()
student1.goToProm()


// Object.create for prototypal inheritance

function Pupil() {
}

Pupil.prototype.sayName = function() {
	console.log(this.name)
}

function EightGrader(name) {
	this.name = name
	this.grade = 8
}

EightGrader.prototype = Object.create(Pupil.prototype)

const carl = new EightGrader("carl")
carl.sayName()
console.log(carl.grade)
