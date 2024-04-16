import PromptSync from 'prompt-sync';
const prompt = PromptSync(); 
// // Question 28

let userAge:number=parseInt(prompt("enter age :"));
if(userAge<2){
    console.log('the person is a baby')
}
else if(userAge>=2 && userAge<=4){
    console.log('the person is a toddler')
}
else if(userAge>=4 && userAge<=13){
    console.log('the person is a kid')
}
else if(userAge>=13 && userAge<=20){
    console.log('the person is a teenager')
}
else if(userAge>=20 && userAge<=65){
    console.log('the person is an adult')
}
else if(userAge>=65){
    console.log('the person is an elder')
}