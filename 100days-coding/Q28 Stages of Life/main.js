"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// // Question 28
let userAge = parseInt(prompt("enter age :"));
if (userAge < 2) {
    console.log('the person is a baby');
}
else if (userAge >= 2 && userAge <= 4) {
    console.log('the person is a toddler');
}
else if (userAge >= 4 && userAge <= 13) {
    console.log('the person is a kid');
}
else if (userAge >= 13 && userAge <= 20) {
    console.log('the person is a teenager');
}
else if (userAge >= 20 && userAge <= 65) {
    console.log('the person is an adult');
}
else if (userAge >= 65) {
    console.log('the person is an elder');
}
