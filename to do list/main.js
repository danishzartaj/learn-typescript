#! /usr/bin/env node 
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "Enter your todo"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: false
        }
    ]);
    const { todo, addmore } = answers;
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Kindly enter valid todo");
    }
}
console.log(todos);
