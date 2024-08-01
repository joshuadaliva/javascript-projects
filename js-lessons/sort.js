// let numbers = [2,20,10,5,3,4]

// numbers.sort((a,b) => b - a)
// console.log(numbers)




const fruits = [
	{
		name : 'apple',
		color : 'red',
		calories : 95
	},
	{
		name : 'oranges',
		color : 'orange',
		calories : 122
	},
	{
		name : 'banana',
		color : 'yellow',
		calories : 251
	},
	{
		name : 'pineapple',
		color : 'yello2',
		calories : 17
	},
]

// fruits.sort((a,b) => a.calories - b.calories)
fruits.sort((a,b) => a.name.localeCompare(b.name))
console.log(fruits)