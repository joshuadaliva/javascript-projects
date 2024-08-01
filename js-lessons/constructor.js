// // constructor - Sometimes we need to create many objects of the same type.
// // To create an object type we use an object constructor function.
// // It is considered good practice to name constructor functions with an upper-case first letter.



// The Process:

// When new Person("Alice", 30) is called, the following steps occur:
// A new empty object is created.
// The this keyword in the constructor function is set to this new object.
// The code inside the constructor function is executed, modifying the new object (this).
// The new object is returned automatically (unless the constructor function explicitly returns an object).






// function Car(make, model, year, color, price, isElectric, features, engine) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.price = price;
//     this.isElectric = isElectric;
//     this.features = features;
//     this.engine = engine;
//     this.drive = function() { console.log(`You drive the ${this.model}`); };
//     this.honk = function() { console.log('Honk! Honk!'); };
// }

// const car1 = new Car('Ford', 'Mustang', 2024, 'red', 30000, false, ['sunroof', 'Bluetooth', 'backup camera'], { type: 'V8', horsepower: 450 });

// console.log(car1.price); // 30000
// console.log(car1.isElectric); // false
// console.log(car1.features); // ['sunroof', 'Bluetooth', 'backup camera']
// console.log(car1.engine); // { type: 'V8', horsepower: 450 }

// car1.drive(); // You drive the Mustang
// car1.honk(); // Honk! Honk!




//using forEach in the function constructor

// function Car(model,year,tool){
// 	this.model = model,
// 	this.year = year,
// 	this.tool = tool
// }


// const car1 = new Car('mustang', 2025, ['screw', 'break'])

// car1.tool.forEach(car => {console.log(car)})

