# JavaScript Function Methods: `bind`, `call`, and `apply`

This table summarizes the key differences between `Function.prototype.bind`, `call`, and `apply` in JavaScript, focusing on how they handle the `this` keyword and arguments.

## Example
```javascript
const obj = { name: 'Alice' };
function greet(greeting) { console.log(`${greeting}, ${this.name}!`); }

// bind: Create a reusable function
const boundGreet = greet.bind(obj, 'Hello');
boundGreet(); // Output: Hello, Alice!

// call: Execute once
greet.call(obj, 'Hi'); // Output: Hi, Alice!

// apply: Execute once with array
greet.apply(obj, ['Hey']); // Output: Hey, Alice!
```
