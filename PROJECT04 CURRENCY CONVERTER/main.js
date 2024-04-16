#! /usr/bin/env node 
import inquirer from "inquirer";
const obje_ct = {
    Dollar: 1,
    Euro: 0.85,
    Pound: 0.76,
    PKR: 279,
    INR: 85,
    AFG: 71.25,
};
const currency = await inquirer.prompt([{
        name: "to",
        type: "list",
        message: "convert from",
        choices: ["Dollar", "Euro", "Pound"]
    },
    {
        name: "do",
        type: "list",
        message: "convet to",
        choices: ["PKR", "INR", "AFG"]
    },
    {
        name: "amount",
        type: "number",
        message: "enter amount"
    }
]);
if (currency.do === "PKR") {
    console.log("PKR:", currency.amount * obje_ct.PKR);
}
else if (currency.do === "INR") {
    console.log("INR:", currency.amount * obje_ct.INR);
}
else if (currency.do === "AFG") {
    console.log("AFG:", currency.amount * obje_ct.AFG);
}
