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
        super(brand); // this value is to be taken from parent class
        this.model = mod;
  }
    show() {
        return this.present() + ', it is a ' + this.model;
  }
}

const mycar = new Model("Ford", "Mustang")
console.log(mycar);


// Static Methods
// Static methods and properties are defined on the class/constructor itself, not on instance objects. These are specified in a class definition by using the static keyword.
// You can call the static method on the class but not on the object.
class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  let myCar = new Car("Ford");
  
  // You can call 'hello()' on the Car Class:
  document.getElementById("demo").innerHTML = Car.hello();
  
  // But NOT on a Car Object:
  // document.getElementById("demo").innerHTML = myCar.hello();
//   ====> this will raise an error.



