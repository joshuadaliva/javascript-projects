// destructuring - use to extract values in arrays and objects then assign them in to variable
// [] - arrays
// {} - object





//swapping two values
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a)
// console.log(b)


//swap 2 elements in array
// const color = ['red', 'green', 'blue'];
// [color[0], color[2]] = [color[2], color[0]];
// console.log(color);


//assign array elements into variables
// const color = ['red', 'green', 'blue'];
// const [red, green, blue] = color;
// console.log(green)



//assigning array elements into variables with rest
// const color = ['red', 'green', 'blue','pink', 'black'];
// const [color1, color2, color3, ...otherColors] = color
// console.log(otherColors)



//extract values from objects
// const person = {
// 	firstName: 'joshua',
// 	lastName: 'daliva',
// 	age:19
// }
// const {firstName, lastName, age, job = 'programmer'} = person
// console.log(job)




//extracting values with nested object

// const person = {
// 	firstName: 'joshua',
// 	lastName: 'daliva',
// 	age:19,
// 	otherDetails : {
// 		fathersName: 'dexter',
// 		mothersName : 'shiela'
// 	}
// }
// const {otherDetails} = person
// const {fathersName, mothersName} = otherDetails
// console.log(fathersName)

// // or if one line:
// const {otherDetails: {fathersName1,mothersName1}} = person
// console.log(mothersName)




//destructuring in function
// function displayPerson({firstName, lastName, age}){
// 	console.log(firstName)
// }
// const person = {
// 	firstName: 'joshua',
// 	lastName: 'daliva',
// 	age:19
// }
// displayPerson(person)

