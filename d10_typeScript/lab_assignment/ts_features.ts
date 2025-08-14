type foo = {
	name: string;
	age: number;
}
type bar = {
	name: string;
	age: number;
	city: string;
}
type fooBar = foo | bar;

function display(x: foo | bar): void {
	if ('city' in x) {
		console.log(`Bar: ${x.name}, Age: ${x.age}, City: ${x.city}`);
	} else {
		console.log(`Foo: ${x.name}, Age: ${x.age}`);
	}
}

enum Color {
	Black,
	White,
	RED,
}

function getColorName(color: Color): string {
	switch (color) {
		case Color.Black:
			return 'Black';
		case Color.White:
			return 'White';
		case Color.RED:
			return 'Red';
		default:
			return 'Unknown Color';
	}
}

function println<T>(message: T): void {
	console.log(message);
}


function alarm(constructor: Function) {
	console.log(`Class created: ${constructor.name}`);
}

@alarm
class Person {
	name: string;
	constructor(name: string = "Alice") {
		this.name = name;
	}
}

const p = new Person();




