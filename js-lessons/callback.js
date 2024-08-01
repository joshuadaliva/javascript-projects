//callback - is a function passed as another function as argument , mostly used in asynchronous operations
//like api request , reading a file or database




/* basic use case of a callback function
hello(leave)
function hello(callback){
	const sayHi = 'HI'
	callback(sayHI);
}
function leave(greet){
	console.log(greet)
}
*/


// 1. Event Handling:
// document.getElementById('myButton').addEventListener('click', function() {
//   alert('Button clicked!');
// });


// 2. Asynchronous Operations:
// setTimeout(function() {
//   console.log('This will run after 1 second');
// }, 1000);


// 3. Array Methods:
// const numbers = [1, 2, 3, 4];
// numbers.map(function(num) {
//   return num * 2;
// });


// 4. Custom Functions:
// function doMath(operation, a, b) {
//   return operation(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// console.log(doMath(add, 5, 3)); // 8




// 5. Callbacks in Promise
// fetch('https://api.example.com/data')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));
