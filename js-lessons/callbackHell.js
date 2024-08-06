// callback hell = nested callback meaning callback inside a callback , in which difficult to read
//old pattern to handle asynchronous functions , use promise + async and await to avoid callback hell

// Callbacks are used to define what should happen after an asynchronous operation completes. 

function task1(callback){
	setTimeout(() => {
		console.log('task 1 is complete')
		callback()
	}, 3000)
}
function task2(callback){
	setTimeout(() => {
		console.log('task 2 is complete')
		callback()
	}, 2000)
}
function task3(callback){
	setTimeout(() => {
		console.log('task 3 is complete')
		callback()
	}, 1000)
}

task1(() => {
	task2(() => {
		task3(() => console.log('done'))
	})
})








// the value of callback in the function task1(callback) is 
/* 

-----------parameter of task1
() => {
	task2(() => {
		task3(() => {
			console.log('done')
		})
	})
}


-----------parameter of task2
() => {
	task3(() => {
		console.log('done')
	})
}


-----------paramter of task3

() => {
	console.log('done')
}


*/