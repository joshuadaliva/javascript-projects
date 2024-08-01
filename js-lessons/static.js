// static The static keyword in JavaScript is used to define static methods and properties in a class.
//  Static methods and properties belong to the class itself rather than to instances of the class. 
// This means you can call static methods or access static properties directly on the class, 
// not on an instance of the class.


// class MathUtil{
// 	static PI = 3.14159
// 	static getDiameter(radius){
// 		return radius *  2
// 	}
// 	static multiply(num){
// 		return this.PI * 2
// 	}
// }

// console.log(MathUtil.PI)
// console.log(MathUtil.getDiameter(10))
// console.log(MathUtil.multiply(2))













// class User{
// 	static userCount = 0;

// 	constructor(username){
// 		this.username = username
// 		User.userCount++
// 	}

// 	static getUserCount(){
// 		console.log(`there are ${User.userCount}`)
// 	}
// 	sayHello(){
// 		console.log(`hello ${this.username}`)
// 	}
// }

// const person = new User('joshua')
// console.log(User.userCount)
// person.sayHello()
// User.getUserCount()


