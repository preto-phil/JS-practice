let head = {
	glasses: 1
};

let table = {
	pen: 3
};

let bed = {
	sheet: 1,
	pillow: 2
};

let pockets = {
	money: 2000 
};

pockets.setPrototypeOf(bed.prototype, table.prototype, head.prototype);
bed.setPrototypeOf(table.prototype, head.prototype);
table.setPrototypeOf(head.prototype);

// or 

let head2 = {
	glasses: 1
};

let table2 = {
	pen: 3,
	__proto__: head2
};

let bed2 = {
	sheet: 1,
	pillow: 2,
	__proto__: table2
};

let pockets2 = {
	money: 2000,
	__proto__: bed2
};

