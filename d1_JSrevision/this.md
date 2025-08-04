# Understanding `this` in JavaScript

```js
const obj = {
	name: 'Alice',
	greet: function(name = "") { console.log(`Hello, ${name} ${this.name}!`); }
};

const unboundGreet = obj.greet;
unboundGreet(); // Output: Hello, undefined!
// because we now extract the greet to the global scope and 
//this inherets from the global context
// Using bind to fix the context of `this`

const boundGreet = obj.greet.bind(obj);
// `this` is fixed to `obj`
boundGreet(); // Output: Hello, Alice!

// With arguments
const greetWithPrefix = obj.greet.bind(obj, 'Dear'); // Pre-set argument
greetWithPrefix(); // Output: Hello, Dear Alice!
```
