// The forEach method is commonly used to iterate over the elements of an array .
// It executes a provided function once for each array element which is a callback.
// Note: forEach does not work with objects or strings directly; it is specifically for arrays.
// for each contains the element, index and array
// array.forEach(callback)
	

// basic use case of a foreach
// let numbers = [1,2,3,4,5,6,7]
// numbers.forEach(displayElements );
// function displayElements(elements){
// 	console.log(elements)
// } 








// 1. Iterating over an array:
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//     console.log(number);
// });



// 2. Modifying each element
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index, array) => {
//     array[index] = number * 2;
// });
// console.log(numbers); // [2, 4, 6, 8, 10]



// 3. summing values
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach((number) => {
//     sum += number;
// });
// console.log(sum); // 15



// 4. Filtering elements:
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = [];
// numbers.forEach((number) => {
//     if (number % 2 === 0) {
//         evenNumbers.push(number);
//     }
// });
// console.log(evenNumbers); // [2, 4]


// 5. updating the dom elements
// const items = ['item1', 'item2', 'item3'];
// const ul = document.getElementById('myList');
// items.forEach((item) => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
// });


// 6. handling array of objects
// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];
// users.forEach((user) => {
//     console.log(user.name);
// });



//common use cases of an array.forEach
// 1. Logging or Debugging
// 2. Performing Side Effects
// 3. Aggregating Results
// 4. Updating External Systems

// Immutability: forEach does not return a new array and is not suitable for creating new arrays based on transformations of the original array. Use map for such transformations.
// Side Effects: forEach is ideal for executing functions that perform side effects, such as logging, making HTTP requests, or updating the DOM.
// Non-returning: Unlike map, forEach does not return any value, so it is used when you do not need the result of the iteration
