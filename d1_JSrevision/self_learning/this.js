const girgis = {
	name: "Girgis",
};

const adham = {
	name: "Adham",

};

Object.prototype.greet = function() {
	console.log(`Hello, my name is ${this.name}`);
}

// girgis.greet(); // Hello, my name is Girgis
// adham.greet(); // Hello, my name is Adham

// so in this case the this is the object that calls the method

const friends = {
	name: "Friends",
	firstFriend: {
		greet: function() {
			console.log(this);
			console.log(`Hello, my name is ${this.name}`);
		}
	},
	secondFriend: {
		name: "Second Friend",
		greet: function() {
			console.log(this);
			console.log(`Hello, my name is ${this.name}`);
		}
	}
}

// friends.firstFriend.greet();
// Hello, my name is undefined
// because the this is the firstFriend object, but it doesn't have a name property
// friends.secondFriend.greet();
// Hello, my name is Second Friend


function outer() {
	const arrowGreet = () => console.log(this.name);
	arrowGreet();
}

// const obj = { name: 'Alice' };
// outer.call(obj);
//Output: Alice
// outer();
//Output: undefined (in strict mode) or window.name (non-strict mode)


const obj2 = {
	name: 'Bob',
	regularMethod: function() {
		const arrowGreet = () => console.log(`Hello, ${this.name}!`);
		arrowGreet();
	}
};

// obj2.regularMethod();
// Output: Hello, Bob!
// const unbound = obj2.regularMethod;
// unbound();
// Output: Hello, undefined! (in strict mode)
//
const you = {
	name: "HOHOHO",
	this: console.log(this),
	arrow: () => {
		console.log(this);
		console.log(`Hello, my name is ${this.name}`);
	}
}

you.arrow(); // Hello, my name is undefined
you.this;



