// The filter() method creates a new array with array elements that pass a test.


// let numbers = [1,2,3,4,5]
// let evenNumbers = numbers.filter(isEven)
// function isEven(element){
// 	return element % 2 === 0
// }
// console.log(evenNumbers) // [ 2, 4 ]





// // 1. Removing Unwanted Elements:
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// // evenNumbers: [2, 4, 6]




// 2. Filtering Objects in an Array:
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];
// const youngUsers = users.filter(user => user.age < 30);
// youngUsers: [{ name: 'Alice', age: 25 }]



// // 3. Extracting Specific Data:
// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 300 }
// ];
// const expensiveProducts = products.filter(product => product.price > 500);
// // expensiveProducts: [{ name: 'Laptop', price: 1000 }]

// 4. using ternary operator (take note must only return true or false not string or other )
// const numbers = [1, 2, 3, 4, 5];
// const max = numbers.filter(element => (element > 2 ? true : false));
// console.log(max);