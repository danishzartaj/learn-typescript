"use strict";
// Question 37
function makeShirt(message = "I love typescript ", size = "large") {
    return `The size of the shirt is ${size} and the message is ${message}`;
}
console.log(makeShirt("medim", "i love "));
console.log(makeShirt());
