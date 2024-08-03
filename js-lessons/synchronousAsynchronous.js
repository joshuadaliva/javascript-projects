// synchronous = executes the code line by line (in a sequential manner)
//asynchronous = allows to perform or execute code concurrently without waiting , doesnt block the execution flow 
// and allows the program to continue (network request, i/o operation , fetching data) handled with callback , promises , async and await



//sample synchronous code
// console.log('task 1')
// console.log('task 2')
// console.log('task 3')


//sample asynchronous code
// setTimeout(() => {console.log('task 1')} , 3000)
// console.log('task 2')
// console.log('task 3')


//handling asynchronous code using callback 
// function func1(callback){
// 	setTimeout(() => {console.log('task 1'); callback()}, 3000)
// }
// function func2(){
// 	console.log('task 2')
// 	console.log('task 3')
// }
// func1(func2)