#! /usr/bin/env node
import inquirer from "inquirer";
let obj = {
    balance: 10000,
    deposit: function (amount: any) {
        this.balance += amount;
        console.log(`You've deposited ${amount}. Your new balance is ${this.balance}.`);
    },
    withdraw: function (amount: any) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`You've withdrawn ${amount}. Your new balance is ${this.balance}.`);
        }
    },
}
const atm = async () => {
    let exit = false;
    while (!exit) {
        const response = await inquirer.prompt([
            {
                type: "list",
                name: "atm",
                message: "please select an option",
                choices: ["deposit", "withdraw", "balance", 'exit']
            },
            {
                type: "input",
                name: "amount",
                message: "please enter the amount",
                when: (answers: any) => {
                    return answers.atm == "deposit" || answers.atm == "withdraw"
                },
                validate: function (value) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || 'Please enter a number';
                },
                filter: Number
            }, {
                type: "input",
                name: "account",
                message: "please enter your account number",
            },
            {
                type: "input",
                name: "pin",
                message: "please enter your pin",
            }
        ])

        if (response.atm == "deposit") {
            obj.deposit(response.amount)
            console.log(`Your new balance is ${obj.balance}.`)
        }
        else if (response.atm == "withdraw") {
            obj.withdraw(response.amount)
            console.log(`Your new balance is ${obj.balance}.`)
        }
        else if (response.atm == "balance") {
            console.log(`Your current balance is ${obj.balance}.`)
        }
        else if (response.atm == "exit") {
            exit = true;
            console.log("Thank you for using our ATM. Goodbye!");
        }
    }
}

atm();
        



    







    


