#! /usr/bin/env node 
import promptSync from "prompt-sync";
const prompt = promptSync();
console.log("Choose a number between 1 to 10");
let x = Math.floor(Math.random() * 10) + 1;
let z;
while (true) {
    z = Number(prompt("Your guess: "));
    if (x == z) {
        console.log("You are right");
        break;
    }
    else {
        console.log("Try again");
    }
}
