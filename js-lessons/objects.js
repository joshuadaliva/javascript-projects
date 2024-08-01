// object = an object is a collection of key-value pairs where the keys are strings (or Symbols) 
// and the values can be of any data type. 
// Object Properties and methods
// An Object is an Unordered Collection of Properties
// Properties are the most important part of JavaScript objects.
// Properties can be changed, added, deleted, and some are read only.



// How to Define a JavaScript Object

//     Using an Object Literal
//     Using the new Keyword
//     Using an Object Constructor



// 1. object literal

// const person = {
// 	firstName : 'joshua',
// 	lastName : 'daliva',
// 	age: 30,
// 	isEmployed: true,
// 	sayHello: () => console.log('hello lods')
// }
// console.log(person.firstName)
// person.sayHello()




// 2. new object 
// const person = new Object();
// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";



// * accessing properties

// const person = {
// 	name: 'joshua',
// 	age: 19
// }
// console.log(person.name) 
// // or
// console.log(person['name'])


// * adding new properties 
// person.nationality = 'filipino'
// console.log(person.nationality)

// * deleting properties
// delete person.name


// * object.keys
// const obj = { name: 'Alice', age: 30 };
// const keys = Object.keys(obj);
// console.log(keys); // Output: ['name', 'age']

// * object.values
// const obj = { name: 'Alice', age: 30 };
// const values = Object.values(obj);
// console.log(values); // Output: ['Alice', 30]

// * object.entries
// const obj = { name: 'Alice', age: 30 };
// const entries = Object.entries(obj);
// console.log(entries); // Output: [['name', 'Alice'], ['age', 30]]


