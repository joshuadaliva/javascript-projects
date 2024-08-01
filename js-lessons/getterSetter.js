// getter  - is a special method that makes a property readable
// setter - is a special method that makes a property writable
//use to validate and modify a value when reading /writing a property




// class Rectangle{
// 	constructor(width,height){
// 		this._width = width,
// 		this._height = height
// 	}

// 	set setWidth(newWidth){
// 		if (newWidth > 0) {
// 			this._width = newWidth
// 		}
// 		else{
// 			console.error('negative')
// 		}
// 	}

// 	set height(newHeight){
// 		if (newHeight > 0) {
// 			this._height = newHeight
// 		}
// 		else{
// 			console.error('negative')
// 		}
// 	}

// 	get getWidth(){
// 		return this._width.toFixed(2)
// 	}
// 	get height(){
// 		return this._height
// 	}


// 	get area(){
// 		return this._width * this._height
// 	}

// }

// const rectangle = new Rectangle(10000, 12)


// console.log(rectangle.getWidth)
// console.log(rectangle.height)
// console.log(rectangle.area)



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set name(newName) {
        if (newName !== '') { // Corrected the comparison
            this._name = newName;
        } else {
            console.log('cannot accept no name');
        }
    }

    set age(newAge) {
        if (newAge > 17) {
            this._age = newAge;
        } else {
            console.log('the age must be 18 +');
        }
    }

    get getName() {
        return this._name;
    }

    get getAge() {
        return this._age;
    }
}

const person = new Person('18', 18);

person.getName // Output: joshua
person.getAge // Output: 16
