
//function is a resuable code , it is used to divide code for specific use 
//variable scoping = local and global scope
//number methods

// function name(){
// 	console.log('joshua')
// }
// name()


// function add(x,y){
// 	return x + y
// }

// const result = add(25,12)

// console.log(result)


// function userEmail(email){
// 	if(email.includes('@gmail.com')){
// 		console.log('pasok ka')
// 		return true
// 	}
// 	else {
// 		console.log('di ka pasok')
// 		return false
// 	}
// }

//using ternary operator

// function userEmail(email){
// 	return email.includes('@gmail.com') ? true : false
// }
// const balik = userEmail('joshua@gmail.com')
// console.log(balik)


//varible scoping:
//local scope
// function func1(){
// 	let x = 1
// 	console.log(x)
// }

// //global scope
// let x = 10
// function func2(){
// 	console.log(x)
// }


//number methods or number formatting
// let x = '100.5353'
// console.log(x.toString()) // use to convert or return number into string
// console.log(x.toExponential()) //use toExponential() returns a string, with a number rounded and written using exponential notation.
// console.log(x.toFixed(2)) //if dont specify a number or put a zero it will round the number, to fixed is commonly use
//with money, converting temperature
// console.log(x.toPrecision(2)) // returns a string with a specified length
// if x.toPrecision() the same number 
// if x.toPrecision(1 or 2) often convert to scientific notation
// if x.toPrecision(10) is morethan the integer it adds zero
// console.log(x.valueOf()) // use to get the primitive value 

//three different methods to convert string to number
// x = Number(x)
// x = parseFloat(x)
// x = parseInt(x) 
// String to Decimal	parseInt("42")	42
// Binary to Decimal	parseInt("1010", 2)	10
// Hexadecimal to Decimal	parseInt("F", 16)	15
// Octal to Decimal	parseInt("075", 8)	61
// Non-Numeric Characters	parseInt("123abc")	123
// Non-Numeric Start	parseInt("abc123")	NaN
// Radix Default	parseInt("010")	10 (modern default)
// console.log(x)