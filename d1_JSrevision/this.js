const girgis = {
	name: "Girgis",
};

const adham = {
	name: "Adham",

};

Object.prototype.greet = function() {
	console.log(`Hello, my name is ${this.name}`);
}

girgis.greet(); // Hello, my name is Girgis
adham.greet(); // Hello, my name is Adham

// so in this case the this is the object that calls the method


