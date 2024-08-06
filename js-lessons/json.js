// json - (javascript object notation) use for exchanging data between a server and a web app
		  // {key:value} or [1,2,3,4,5] or [{key:value}]
		   
		   // JSON.stringify() //use to convert js object into string
		   // JSON.parse() //use to convert json string to object




// const names = ["joshua", "luis", "arben"];
// const jsonString = JSON.stringify(names);
// console.log(jsonString )



// const person = {
// 	"name" : "joshua",
// 	"age" : 12,
// 	"isEmployed" : true
// }
// const jsonString = JSON.stringify(person)
// console.log(jsonString)


// const people = [
// 	{
// 		"name" : "joshua",
// 		"age":19
// 	},
// 	{
// 		"name" : "luis",
// 		"age":13
// 	},
// 	{
// 		"name" : "hans",
// 		"age":18
// 	},

// ]
// const peoples = JSON.stringify(people)

// const parsed = JSON.parse(peoples)
// console.log(parsed)






fetch("person.json");
.then(result => result.json())