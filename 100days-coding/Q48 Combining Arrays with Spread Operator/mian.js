let HP = [15999, 23000, 40000, 39999];
let dell = [34433, 15999, 14000, 2800];
let add = [...HP, ...dell].sort((a, b) => a - b);
console.log(add);
export {};
