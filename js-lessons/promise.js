// promise.js - is an object that handles and manages the asynchronous code more likely the resul in that code
// wrap a promise object around {async code}

// "i promise a return value"
//      pending => resolved or rejected



// new Promise((resolve, reject) => {asynchronous code})



const walkDog = new Promise((resolve, reject) => {
	setTimeout(() => {
		const walk = false
		if(walk){
			resolve('you walk the dog')
		}else {
			reject('you did not walk the dog')
		}
	}, 3000)
})



const cleanKitchen = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('you clean the kitchen')
	}, 1000)
})


function takeOutTrash(){
	return new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve('you take out the trash')
	}, 2000)
})
} 


walkDog
.then(result => {
	console.log(result)
	return takeOutTrash()
})
.then(result => {
	console.log(result)
	return cleanKitchen
})
.then(result => {
	console.log(result)
})
.then(() => {
	console.log('you finish all the task')
})
.catch(error => {
	console.log(error)
})




// Promise.all([walkDog, cleanKitchen, takeOutTrash()])
// 	.then(results => {
// 		console.log('Results:', results);
// 	})
// 	.catch(error => {
// 		console.error('Error:', error);
// 	});



