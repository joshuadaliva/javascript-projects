// map - similar to foreach but map return a new array
//also contains element, index, array
// map is commonly used to transform an array

// const numbers  = [1,2,3,4,5]

// const squares  = numbers.map(square)
// function square(element){
// 	return Math.pow(element, 2)
// }
// console.log(squares) //returns a new array



// 1. Transforming Array Elements:
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]




// 2. Extracting properties in objects
// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];
// const names = users.map((user) => user.name);
// console.log(names); // ['Alice', 'Bob', 'Charlie']




// 3. Formatting Data:
// const numbers = [1, 2, 3];
// const formatted = numbers.map(number => `Number: ${number}`);
// console.log(formatted); // ['Number: 1', 'Number: 2', 'Number: 3']



// 4. Generating New Arrays from Existing Data:
// const strings = ['apple', 'banana', 'cherry'];
// const lengths = strings.map((str) => str.length);
// console.log(lengths); // [5, 6, 6]



// 5. Applying a Function to Each Element:
// const numbers = [1, 2, 3];
// const squares = numbers.map((number) => Math.pow(number, 2));
// console.log(squares); // [1, 4, 9]


// 6. Creating JSX Elements (in React):
// const items = ['item1', 'item2', 'item3'];
// const listItems = items.map((item) => <li key={item}>{item}</li>);


// 7. Mapping to Objects:
// const data = [1, 2, 3];
// const objects = data.map((value) => ({ values : value, squared: value * value }));
// console.log(objects); // [{ value: 1, squared: 1 }, { value: 2, squared: 4 }, { value: 3, squared: 9 }]


// 8. map of object
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];

// const haha = users.map(user => ({name: `${user.name} haha`, age:user.age}))

// console.log(haha)1





// use cases forEach and map

 // Use forEach when you need to perform an action or side effect for each element without creating a new array.
 // Use map when you want to create a new array based on the transformation of the original array's elements.

// in react js
//  forEach is less common in rendering but can be used for side effects within React components, such as updating component state or performing calculation
// When to Use: map is commonly used to render lists of components. If you have an array of data that you want to display as a list of components, map is ideal because it creates a new array of React elements.




