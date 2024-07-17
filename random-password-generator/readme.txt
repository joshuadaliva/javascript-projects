
//array - is a container that holds multiple values , any datatype
//array is an object 

// let fruits = ['bpple', 'arange', 'banana']
// console.log(fruits)
// console.log(fruits[0])
// fruits[0] = 'cocunot'

//adds to array
// fruits.push('joshua') //add element to the last element

//removes the last item
// fruits.pop() //removes the last element

//adds to array in first item
// fruits.unshift('mmango') //adds element at the beginning

//removes the first item in the arrat
// fruits.shift() //removes the  first element

//checks the length
// let numOfFruits = fruits.length
// console.log(numOfFruits)

 //using string methods in this
// let index = fruits.indexOf('arange')
// console.log(index)

//joining an array into a single string
//The join() method in JavaScript is used to join all elements of an array into a single string. It combines the array elements into a string, separated by a specified separator.
// console.log(fruits.join(' '))


//displaying all elements in an array
//method 1
// for(var i = 0; fruits.length > i; i++){
// 	console.log(fruits[i])
// }

//method 2
// for(let fruit of fruits){
// 	console.log(fruit)
// }



//spread operator
//spreads the iterable such as array or string 
//imagine that you are unpacking a box
//also spread is used to combine objects
//it is recommended that if you used spread operator you must have a container that holds the values

// let numbers = [1,2,3,4,5]
// let maximum = Math.max(...numbers)
// console.log(maximum)


// let username = 'joshua'
// //unpack the joshua and put every letter to the array
// let names = [...username]
// console.log(names)

// using join method to joing the username
// console.log(names.join(''))


//creating a array copy
// let fruits = ['apple', 'orange', 'banana']
// let copy = [...fruits]
// console.log(copy)

//passing in the function
// const numbers = [1, 2, 3];
// function sum(a, b, c) {
//     return a + b + c;
// }
// console.log(sum(...numbers)); // Output: 6




// // The rest operator (...) in JavaScript is used to collect multiple elements into a single array or object.
//  It's often used in function parameters to handle a variable number of arguments, as well as in array and object destructuring
//  assignments.
 
// function fridge(...foods){
// 	console.log(foods)
// }
// fridge('orange', 'banana', 'apple') //output: [ 'orange', 'banana', 'apple' ]



//using spread operator with rest
// function fridge(...foods){
// 	console.log(...foods)
// }
// fridge('orange', 'banana', 'apple')



// /Rest Parameter in Arrow Function
// const multiply = function (multiplier, ...numbers) {
//     return numbers.map(function (number) {
//         return number * multiplier;
//     });
// };
// console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
