# JavaScript-Function
## Practicing JS

JavaScript Function Examples

This repository contains examples of different types of functions in JavaScript, including regular functions, function expressions, functions with return values, and arrow functions. Each example demonstrates a different aspect of function usage in JavaScript.

### Table of Contents
1. Regular Functions
2. Function Expressions
3. Functions with Return Values
4. Arrow Functions
5. One-Line Arrow Functions

## Regular Functions
Regular functions in JavaScript are defined using the function keyword. They can take parameters, execute code, and optionally return a value.

```javascript
Copy code
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Moe"); // Output: Hello, Moe!
```

## Function Expressions
Function expressions are similar to regular functions but are defined as part of an expression. They can be assigned to variables and passed around like any other value.

```javascript
Copy code
const hello = function (name) {
    console.log("Hello, " + name + "!");
};

hello("Ian"); // Output: Hello, Ian!
```

## Functions with Return Values
Functions in JavaScript can return values using the return statement. This allows them to compute a result and pass it back to the caller.

```javascript
Copy code
function multiply(num1, num2) {
    return num1 * num2;
}

const result = multiply(5, 5);
console.log(result); // Output: 25
```

## Arrow Functions
Arrow functions provide a more concise syntax for writing functions. They are especially useful for short, one-line functions.

```javascript
Copy code
const multiply = (num1, num2) => {
    return num1 * num2;
};

const result = multiply(5, 6);
console.log(result); // Output: 30
```

## One-Line Arrow Functions

Arrow functions can be further simplified for one-liners. If the function body is a single expression, curly braces and return keyword can be omitted.

```javascript
Copy code
const world = () => console.log('hello world!');

world(); // Output: hello world!
```
```javascript
Copy code
const double = num => num * 2;

const result = double(5);
console.log(result); // Output: 10
```
