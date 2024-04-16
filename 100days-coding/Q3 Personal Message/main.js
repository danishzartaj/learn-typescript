"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Qestion no 3
let Name1 = prompt("enter first name :");
let Name2 = prompt("enter first name :");
let Name3 = prompt("enter first name :");
let FirstName = Name1.toLowerCase();
let SecondName = Name2.toUpperCase();
let ThirdName = Name3.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
console.log(`hello ${FirstName} ,YOur name in:`);
console.log(`hello ${SecondName} ,YOur name in:`);
console.log(`hello ${ThirdName} ,YOur name in:`);
