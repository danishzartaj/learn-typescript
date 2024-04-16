// Question 18
let beatiful_Place:string[]=["New Zealand","Switzer land","Kashmir","Japan","Astria" ];
console.log('orignal order: ');// Print the array in its original order
console.log(beatiful_Place);
console.log('\n \t Alphabet order')
console.log([...beatiful_Place].sort());
// Show that the array is still in its original order
console.log("\nStill in original order:");
console.log(beatiful_Place)
// Print the array in reverse alphabetical order
console.log("\nReverse alphabetical order:")
// Print the array in reverse alphabetical order
console.log("\nReverse alphabetical order:");
console.log([...beatiful_Place].sort().reverse);
// Show that the array is still in its original order
console.log("\nStill in original order:");
console.log(beatiful_Place);
// Reverse the order of the list
beatiful_Place.reverse();
console.log("\nReversed order:");
console.log(beatiful_Place);

// Reverse the order of the list again
beatiful_Place.reverse();
console.log("\nBack to original order:");
console.log(beatiful_Place);

// Sort the array alphabetically
beatiful_Place.sort();
console.log("\nSorted alphabetically:");
console.log(beatiful_Place);

// Sort the array in reverse alphabetical order
beatiful_Place.sort().reverse();
console.log("\nSorted in reverse alphabetical order:");
console.log(beatiful_Place);
