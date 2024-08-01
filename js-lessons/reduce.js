// reduce - The reduce() method in JavaScript is used to iterate over an array and accumulate a single 
// result based on the values in the array. It's often used to perform operations
// like summing numbers, combining objects, or generating a single output from a collection of inputs.

// The reduce method is particularly useful when you need to derive a single value or a more complex output from an array


// 1. accumalator - the previous element
// 2. element  - is the current element
// 3. index - the index of element in  an array 
// 4. array - the array it self


// const prices = [2,3,4,32,5]
// const total = prices.reduce(sum)
// function sum(accumalator, element, index , array){
// 	return accumalator + element
// }
// console.log(total)


// all uses cases of reduce

// 1. 	sum of all elements
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 2);
// console.log(sum); // Output: 17


// 2 . products of all elements 
// const numbers = [1, 2, 3, 4, 5];
// const product = numbers.reduce((acc, curr) => acc * curr, 1);
// console.log(product); // Output: 12



// 3. finding the max numbers 
// const numbers = [1, 2, 3, 4, 5];
// const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc));
// console.log(max); // Output: 5


// 4. finding max number using math method
// const numbers = [1,20,3,4,5]
// const max = numbers.reduce((acc,curr) => Math.max(acc,curr))
// console.log(max)

