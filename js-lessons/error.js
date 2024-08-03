 // errorr- is an object that represents a problem that occurs during the execution of a program. //often occurs in user input and network
// console.lag('haha') //(uncaught type error) is not a function
// console.log(x) //x is not defined


//handling error
//		try {} = encloses code that might produce an error
//		catch {} = catch and handle any thrown errors from trr{}
//		finally {} = (optional) always executes. used motly for clean up



try{
	const divident = 8;
	const divisor = 0;
	if (divisor == 0){
		throw new Error('cannot divide by zero') //custom error
	}
}
catch(error){
	// console.log(error.name) // type of error
	// console.log(error.message) //complete error message
}
finally{
	console.log('closed')
}



