"use strict";
/// Question 43
let magicians = ["Archimedes the Astonishing", "Alistair the Amazing", "Azura, the Arcane", "Artemis the Alchemist"];
function copyarr(arr) {
    return [...arr];
}
function showMagicians(magicians) {
    for (let x of magicians) {
        console.log(x);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
const x = copyarr(magicians);
make_great(x);
console.log("\nthis is my orignal array");
showMagicians(magicians);
console.log("\n\nthis is my copy array");
showMagicians(x);
