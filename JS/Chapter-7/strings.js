// defining string
var string1 = "Hello";
var string2 = "World";

// defining string using template literals (backticks) -> we can perform interpolation on template literals
var string1 = `Hello`;
var string2 = `${string1} World`;
console.log(string2);

// concatenating strings
var str1 = "Hello";
var str2 = "World";
var final = str1 + str2;
console.log(final); // output: HelloWorld
console.log(str1 + " " + str2); // output: Hello World

// concatenating strings with non-string variables
var str1 = "Hello";
var sum = 100;
console.log(str1 + " " + sum); // output: Hello 100
// internally the non-string value will be converted into string and then will be concatenated


// Reverse a string
function ReverseString(str) {
    return str.split('').reverse().join('')
    };
console.log(ReverseString("String to be reversed"));