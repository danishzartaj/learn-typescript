"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let a = parseInt(prompt("Enter Percentage! "));
if (a > 90 && a <= 100) {
    console.log(`your Grade is : A+`);
}
else if (a >= 70 && a <= 90) {
    console.log(" your Grade is : A ");
}
else if (a >= 60 && a <= 69) {
    console.log(" your Grade is : B");
}
else if (a >= 50 && a <= 59) {
    console.log(" your Grade is : C");
}
else if (a >= 30 && a <= 49) {
    console.log(" your Grade is : D");
}
else {
    console.log(" your Grade is : F");
}
