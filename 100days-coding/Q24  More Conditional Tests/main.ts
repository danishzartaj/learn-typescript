
// Question 24
// Equality with strings
console.log("Testing equality with strings:");
console.log("book" == "book"); // True
console.log(("book" as string) == "book"); /// true

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// // Item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// // Item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True