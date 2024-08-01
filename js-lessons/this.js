// this is a special keyword that refers to the context in which a function is executed. 
// can be use as referenced to the object where this is used  

// console.log(this) //window object


// const person = {
// 	name:'joshua',
// 	favFood: 'mango',
// 	sayHello: function() { console.log(`hi ${this.favFood}`)}
// }
// person.sayHello()



// 1. Function Context
// Inside a regular function, this refers to the global object (in strict mode, it’s undefined).
// function showThis() {
//   console.log(this);
// }
// showThis(); // Logs `window` in non-strict mode or `undefined` in strict mode.



// 2. Constructor Functions
// When used inside a constructor function, this refers to the newly created instance of the object.
// function Person(name) {
//   this.name = name;
// }
// const alice = new Person('Alice');
// console.log(alice.name); // Logs 'Alice'




// 3. Event Handlers
// In event handlers, this refers to the element that triggered the event.
// document.getElementById('myButton').addEventListener('click', function() {
//   console.log(this); // Logs the button element
// });





