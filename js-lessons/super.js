// super is a keyword use in classes to call the parent constructor or access methods
// of a parent (superclass)
// this - object
// super - the parent



//in super you need to have a constructor and a methods for example :
/*
in constructor:
constructor(name,age){
	super(name,age)
}

in method
super.move(here is the argument)

*/



class Animal {
	constructor(name,age){ 	
		this.name = name,
		this.age = age
	}


	// move(speed){
	// 	console.log(`speed is ${speed}`)
	// }

	getName(){
		console.log(this.name)
	}
}

class Rabbit extends Animal {
	constructor(name,age, runSpeed){
		super(name,age)
		this.runSpeed = runSpeed
	}
	// run(){
	// 	super.move(this.runSpeed)
	// }


}


const rabbit = new Rabbit('rabbit', 1, 25)

// rabbit.run()
// rabbit.getName()
// console.log(rabbit.age)