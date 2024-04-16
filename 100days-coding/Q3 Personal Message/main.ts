import PromptSync  from "prompt-sync";
const prompt =PromptSync()

// Qestion no 3
let Name1 :string=prompt("enter first name :");
let Name2 :string=prompt("enter first name :");
let Name3 :string=prompt("enter first name :");

let FirstName:string= Name1.toLowerCase();
let SecondName:string=Name2.toUpperCase(); 
let ThirdName:string= Name3.split('').map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join("");

    console.log(`hello ${FirstName} ,YOur name in:`) /// lower case

    console.log(`hello ${SecondName} ,YOur name in:`) /// uppper casse

    console.log(`hello ${ThirdName} ,YOur name in:`)  /// title case 
