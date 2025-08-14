


function display(x: number, y: number): void
function display(x: string, y: boolean): void

function display(x: number | string, y: number | boolean): void {
	if (typeof x === 'number' && typeof y === 'number') {
		console.log(`Number: ${x}, Number: ${y}`);
	} else if (typeof x === 'string' && typeof y === 'boolean') {
		console.log(`String: ${x}, Boolean: ${y}`);
	} else {
		throw new Error('Invalid arguments');
	}
}

class Person {
	constructor(public name: string, public age: number) { }

}


const p = new Person('John', 30);

console.log(p.name, p.age);




