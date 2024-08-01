// closure is a function define inside another function, the inner function has access to the 
// variable and function in outside function, allow for private variable use and state management in js frameworkd like js

//basic usage of a closure
// function outerFunction() {
//   let outerVariable = 'I am outside!'
//   function innerFunction() {
//     console.log(outerVariable); // Accesses the outer variable
//   }
//   return innerFunction;
// }
// const closure = outerFunction();
// closure(); // Output: I am outside!




// function increment(){
// 	let count = 0;
// 	count++
// 	console.log(count)
// }
// increment()
// increment() //it resets but lets try to create a closure


// this is a closure but in order to increment you need to call the function to the inner function 
// in order to manipulate it return it as object
function increment(){
	let count = 0
	function addOne(){
		count++
		console.log(count)
	}

	return{addOne}
}



const dagdag = increment()

dagdag.addOne()
dagdag.addOne()
dagdag.addOne()








