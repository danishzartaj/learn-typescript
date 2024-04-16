"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Qestion NO 2
let PersonName = prompt("what is your Name?") || "";
if (PersonName !== null && PersonName !== "") {
    console.log(`hello ${PersonName},Would U like to learn some python today`);
}
else {
    console.log("plz enter your name");
}
