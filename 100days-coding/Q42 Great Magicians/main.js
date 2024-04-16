"use strict";
//// Question 42
let magicians = ["Archimedes the Astonishing", "Alistair the Amazing", "Azura, the Arcane", "Artemis the Alchemist"];
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
make_great(magicians);
// showMagicians(magicians);
