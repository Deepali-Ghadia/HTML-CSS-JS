// class constructor -> creting instance of a class using new keyword
// constructor, which sets up each instance's initial state and handles any parameters that were passed when calling new.
// It's defined in a class block as though you're defining a method named constructor

class Person{
    constructor(name){
        // this concept is similar to __init__ method in python
        console.log("Initializing values for an instance of this class")
        this.name = name
        console.log(this.name)
    }
}
// as soon as we create object of this class using new keyword, the object is initialized with values provided inside the constructor.
const p1 = new Person("Person")



// class inheritance
class Car {
    constructor(brand) {
        this.carname = brand;
  }
    present() {
        return 'I have a ' + this.carname;
  }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
  }
    show() {
        return this.present() + ', it is a ' + this.model;
  }
}

const mycar = new Model("Ford", "Mustang")
console.log(mycar);