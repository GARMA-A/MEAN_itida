1. Function.prototype.bind

- Purpose: Creates a new function with a permanently bound this value and, optionally, pre-set arguments.

- How it works: It returns a new function where this is set to the specified value, regardless of how the function is called later. It does not execute the function immediately.

- Syntax: function.bind(thisArg[, arg1[, arg2[, ...]]])
Use case: Useful when you need to ensure a function’s this is fixed, especially in event listeners or callbacks where this might otherwise change.

2. Function.prototype.call

- Purpose: Calls a function immediately with a specified this value and individual arguments.
- How it works: Executes the function with this set to the provided thisArg and passes arguments one-by-one.

- Syntax: function.call(thisArg, arg1, arg2, ...)
Use case: Useful when you want to invoke a function with a specific this context and pass arguments dynamically.

3. Function.prototype.apply

- Purpose: Similar to call, but calls a function immediately with a specified this value and arguments passed as an array.
How it works: Executes the function with this set to thisArg and takes an array (or array-like object) of arguments.
- Syntax: function.apply(thisArg, [argsArray])
- Use case: Useful when arguments are in an array, such as when working with Math.max or spreading array elements.


| Aspect       | bind                                                                 | call                                                                | apply                                                              |
|--------------|----------------------------------------------------------------------|---------------------------------------------------------------------|--------------------------------------------------------------------|
| **Purpose**  | Creates a new function with a fixed `this` (and optionally pre-set args). | Invokes a function immediately with a specified `this` and args.     | Invokes a function immediately with a specified `this` and args array. |
| **Execution** | Does not execute the function immediately; returns a new function.    | Executes the function immediately.                                  | Executes the function immediately.                                 |
| **Arguments** | Accepts individual arguments (optional) to pre-bind.                  | Accepts individual arguments (comma-separated).                     | Accepts arguments as an array.                                     |
| **Return Value** | A new function with `this` and args bound.                        | The result of the function execution.                               | The result of the function execution.                              |
| **Use Case** | Fix `this` for later use (e.g., callbacks, event listeners).          | Call a function once with a specific `this` (e.g., method borrowing). | Call a function once with args in an array (e.g., `Math.max`).      |


```js
// Example of Function.prototype.bind
const obj = {
	name: 'Alice',
	greet: function(name = "") { console.log(`Hello, ${name} ${this.name}!`); }
};
const unboundGreet = obj.greet;
unboundGreet(); // Output: Hello, undefined!
// Using bind to fix the context of `this`
const boundGreet = obj.greet.bind(obj);
// `this` is fixed to `obj`
boundGreet(); // Output: Hello, Alice!
// With arguments
const greetWithPrefix = obj.greet.bind(obj, 'Dear'); // Pre-set argument
greetWithPrefix(); // Output: Hello, Dear Alice!
// Example of Function.prototype.call
function greet(greeting, punctuation) {
	console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person = { name: 'Bob' };
greet.call(person, 'Hello', '!'); // Output: Hello, Bob!
// Example of Function.prototype.apply
function greetWithArray(args) {
	console.log(`${args[0]}, ${this.name}${args[1]}`);
}
const person2 = { name: 'Charlie' };
greetWithArray.apply(person2, ['Hi', '?']); // Output: Hi, Charlie?

```

#### `bind` creates a new function with a fixed `this` context and optional pre-set arguments, while `call` and `apply` invoke the function immediately with a specified `this` context and arguments.

#### there is no big difference between `call` and `apply`, the only difference is that `call` takes arguments as a list, while `apply` takes arguments as an array.

