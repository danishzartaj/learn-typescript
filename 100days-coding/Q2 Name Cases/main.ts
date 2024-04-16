import PromptSync from "prompt-sync"
const prompt = PromptSync() ; 
// Qestion NO 2

let PersonName = prompt("what is your Name?") || "";
if(PersonName !== null && PersonName !==""  ){
    console.log(`hello ${PersonName} ,Would U like to learn some python today`)
}
else{
   console.log("plz enter your name") 
}
