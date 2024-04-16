// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.

let HP=[15999,23000,40000,39999];
let dell= [34433,15999,14000,2800];
let add=[...HP,...dell].sort((a,b)=>a-b)
console.log(add);
