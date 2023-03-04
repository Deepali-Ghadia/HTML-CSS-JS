// creating a set
const mySet = new Set();

// creating set from an array
const arr = [1,2,3,4,4,5];
const mySet1 = new Set(arr);

// adding value to a set
mySet1.add(51);
console.log(mySet1);

// adding multiple values to a set at a time
mySet1.add(51).add(53).add(55);
console.log(mySet1);

// removing value from a set
mySet1.delete(55);
console.log(mySet1);

// Checking if a value exists
mySet1.has(99);

// clearing a set
mySet.clear()

// getting set length
console.log(mySet1.size)