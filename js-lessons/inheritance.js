	// inheritance = allows new class to inherit properties and methods from an existing class
	// (parent > child) helps with code reusability





class Animal{
	alive = true;
	eat(){
		console.log(`this ${this.name} is eating`)
	}
	sleep(){
		console.log(`this ${this.name} is sleeping`)
	}

	calculate(){
		console.log(this.num1 * this.num2)
	}
}


class Rabbit extends Animal{
	name = 'rabbit'
	num1  = 23
	num2 = 123
	run(){
		console.log(`the ${this.name} is running`)
	}
}

class Fish extends Animal{
	name = 'Fish'
}


const rabbit = new Rabbit()
const fish = new Fish()

console.log(rabbit.alive)
rabbit.calculate()



