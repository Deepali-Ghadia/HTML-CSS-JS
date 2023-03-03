// using this context with simple objects
var person = {
    name: 'John Doe',
    age: 42,
    gender: 'male',
    bio: function() {
    console.log('My name is ' + this.name);
    }
   };
person.bio(); // logs "My name is John Doe"
var bio = person.bio;
bio();



// using this in constructor functions\
class Animal{
    constructor(name, type){
        this.name = name
        this.type = type
    }
}

var animal1 = new Animal("Tiger", "Wild")
console.log(animal1.name); // tiger
console.log(animal1.type); //wild