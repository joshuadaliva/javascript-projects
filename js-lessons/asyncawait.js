// asyncawait - async makes the function returns a promise
// 			 await makes an async function wait promise

// 			 allows you to write asynchronous code in asynchronous manner


function walkDog(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('you walk the dog')
		}, 3000)
	})
}

function cleanKitchen(){
	return new Promise((resolve, reject) => {
		const isCleaned = false
		if(isCleaned){
			setTimeout(() => {
			resolve('you clean the kitchen')
			}, 2000)
		}else{
			reject('you did not clean the kitchen')
		}
		
	})
}
function takeoutTrash(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('you takeout the trash')
		}, 3000)
	})
}






async function doChoires(){
	try{
		const walk = await walkDog();
		console.log(walk)
		const clean = await cleanKitchen();
		console.log(clean);
		const takeout = await takeoutTrash();
		console.log(takeout)
	}
	catch(error){
		console.log(error)
	}

}




doChoires()


