//function declaration - A function declaration is a way to define a function with a name. 
// The function can be called before it is defined in the code due to hoisting

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greet('Alice')); // Output: Hello, Alice!







//function expression 
// A function expression defines a function inside an expression, usually assigned to a variable. 
// Function expressions can be anonymous (without a name) or named.
// Unlike function declarations, function expressions are not hoisted, so they cannot be called before they are defined.

//sample code 1:
// const greet = function(name) {
//     return `Hello, ${name}!`;
// };

// console.log(greet('Bob')); // Output: Hello, Bob!


//sample code 2:
// const numbers = [1,2,3,4,5]
// numbers.forEach(function(number){
// 	console.log(number)
// })








//arrow function - Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:
// in default arrow function returns a value (if one line hehehe.)


//syntax
// const functionName = (parameters) => {
//   // function body
// };


// 1. simple arrow function with parameters
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5

// 2. arrow function with no parameters
// const greet = () => 'Hello, world!';
// console.log(greet()); // Hello, world!

// 3. with one parameter ( you can remove the parenthesis)
// const square = x => x * x;
// console.log(square(4)); // 16

// 4. multi line
// const multiply = (a, b) => {
//   const result = a * b;
//   return result;
// };
// console.log(multiply(2, 5)); // 10

// 5. using array methods
// const numbers = [1,2,3,4]
// numbers.forEach(number => console.log(number , 'haha'))



