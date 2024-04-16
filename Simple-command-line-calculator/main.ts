#! /usr/bin/env node
import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
const calculator = await inquirer.prompt([
    {
     message:"enter first number",
     name :"number",
     type: "number",
     
    },
    {
        message:"Enter Second number",
        name:"Num2",
        type:"number"
    },
    {
        message:"Select Operator",
        name:"Operator",
        type:"list",
        choices:["Addition","subtraction","Multiplication","Division" ]
    }
]); 
if(calculator.Operator === "Addition"){
    let sum = calculator.number + calculator.Num2
    console.log(`The ${calculator.Operator} of ${calculator.number} and ${calculator.Num2} of the`,sum )
     
}
else if(calculator.Operator==="subtraction" ){
     let subtract = calculator.number - calculator.Num2
     console.log(`The ${calculator.Operator} of ${calculator.number} and ${calculator.Num2} of the` , subtract)
    
         
}
else if(calculator.Operator==="Multiplication" ){
     let multiply = calculator.number * calculator.Num2
     console.log(`The ${calculator.Operator} of ${calculator.number} and ${calculator.Num2} of the`, multiply)
}
else if(calculator.Operator==="Division" ){
    let divide = calculator.number / calculator.Num2
    console.log(`The ${calculator.Operator} of ${calculator.number} and ${calculator.Num2} of the`, divide)
}
else("select valid Operator")


                    

