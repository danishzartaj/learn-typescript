"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Qestion NO 2
// let PersonName:string = "";
// PersonName = prompt("what is your Name?") || "";
// if(PersonName !== null && PersonName !==""  ){
//     alert(`hello ${PersonName},Would U like to learn some python today`)
// }
// else{
//     alert("plz enter your name") 
// }
// Qestion no 3
// let Name :string="";
// let FirstName:string= Name.toLowerCase();
// let SecondName:string=Name.toUpperCase(); 
// let ThirdName:string= Name.split('').map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join("");
// if(Name !== null && Name !== ""){
//     alert(`hello ${Name},YOur name in:
//     `)
// }
// Question NO 4
// let person:string= "Quaid azam" ;
// console.log(person," Expect the best, prepare for the worst")
// Question 5
// let Famous_Person:string= "Quaid-e-Azam" ;
// let messege:string = "Expect the best, prepare for the worst." ;
// console.log(`${Famous_Person} said,${messege}`)
// Queston 6
// const FullName:string = v\n"\tSir Zia\t\n" ;
// console.log(FullName)
// const Name:string = FullName.trim();
// console.log(Name)
//Qustion 7 and 8
// console.log(1+7);  // Addition
// console.log(9-1);  // Sub
// console.log(2*4);   // Mul
// console.log(16/2);  // Division
// Question 9
// let x :number = 4;
// let messege:string = "its your number " + x  ;
// console.log(messege)
// Question 10
// i have already comment !
// Question 11
// let Name: string[]= ["Elon musk","Jef bezos","Waren buffet","mukesh ambani"];
// for(let i=0; i<Name.length; i++ ){
//     console.log(Name[i])
// } 
//  Question 12
// let Name: string[]= ["Elon musk","Jef bezos","Waren buffet","mukesh ambani"];
// let messege :string[]=["hello ","how are you","hey bro","brother"] ;
// for(let i=0; i<Name.length; i++ ){
//     console.log(messege[i] + Name[i])
// } ;
// Question 13
// let transportation: string[]= ["car","bus","bike","cycle"];
// for(let i=0; i<transportation.length; i++ ){
//     console.log("i would like a  " + transportation[i])
// }
// Question 14
// let Guest_Name:string[] = ["Elon musk","Bill gates","Jef bezos","Waran Buffet"];
// for(let i=0; i<Guest_Name.length; i++ ){
//     console.log("mr"+ Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t" )
// }
/// Question 15
// let Guest_Name:string[] = ["ahmed","faraz","arsalan"]
// // for(let i=0; i<Guest_Name.length; i++ ){
// //     console.log("Mr "+ Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t" )
// // }
// let new_Guest:string= "sir zia ";
// Guest_Name[2] = new_Guest;
// let absent_Guest:string= "arsalan"
// for(let i=0; i<Guest_Name.length; i++ ){
//     console.log("Mr "+ Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t" )
// }
// console.log(`Mr.${absent_Guest} is not coming. `)
// Question 16
// let Guest_Name:string[] = ["ahmed","faraz","arsalan"] 
// for(let i=0; i<Guest_Name.length; i++ ){
// console.log("Mr "+ Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t" )}
// let new_Guest:string= "sir zia ";
// Guest_Name[2] = new_Guest;
// let absent_Guest:string= "arsalan"
// console.log(`Mr.${absent_Guest} is not coming. `)
// console.log("we are invite 3 more friend! ")
// Guest_Name.unshift('maaz khan');
// Guest_Name.push("farooq");
// for(let i=0; i<Guest_Name.length; i++ ){
// console.log("Mr "+ Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t" )};
// Question 17
// let Guest_Name:string[] = ["ahmed","faraz","arsalan"] 
// let new_Guest:string= "sir zia ";
// Guest_Name[2] = new_Guest;
// let absent_Guest:string= "arsalan"
// console.log(`Mr.${absent_Guest} is not coming. `)
// console.log("we are invite 3 more friend! ")
// Guest_Name.unshift('maaz khan');
// Guest_Name.splice(0,2,"sahil");
// Guest_Name.push("farooq");
// for(let i=0; i<Guest_Name.length; i++ ){
// console.log("Mr "+ Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t" )};
// console.log("\nsorry we can't arrange big table,Only two People invited ")
// while(Guest_Name.length>2){
//     let remove_Guest= Guest_Name.pop();
//     console.log(`Mr. ${remove_Guest} You are not invited.`)
// };
// for(let i=0; i<Guest_Name.length; i++ ){
// console.log("Mr "+ Guest_Name[i] + "\n You are still invited.")};
// Guest_Name.splice(0,2)
// console.log(Guest_Name)
// Question 18
// let beatiful_Place:string[]=["New Zealand","Switzer land","Kashmir","Japan","Astria" ];
// console.log(beatiful_Place);
// console.log([...beatiful_Place].sort());
// console.log(beatiful_Place);
// console.log([...beatiful_Place].sort().reverse);
// console.log(beatiful_Place);
// console.log(beatiful_Place.reverse());
// console.log(beatiful_Place.reverse());
// console.log(beatiful_Place.sort());
// console.log(beatiful_Place.sort().reverse());
// Question 19
// let Guest_Name:string[] = ["Elon musk","Bill gates","Jef bezos","Waran Buffet"];
// console.log(`I am inviting ${Guest_Name} people to dinner.`); 
// // Question 20
// let cities:string[]=["Karachi","Mumbai","Dhaka","lahore"];
// console.log("i like this cities",cities);
// Question 21
// let object:{model:string,developer:string,price:number}
// ={
//     model:"vision pro",
//     price:1100000, 
//     developer:"Apple Inc",
// }
// console.log(object)
// // Question 22
// let famousName:string[]=["Faiz Ahmed","Ahmed Faraz","Joun Alia"];
// console.log(famousName[3])// Undifind 
// console.log(famousName[2])  // JOun alia 
// // Question 23
// let car:string="Audi";
// // test NO 1
// console.log("Is car === 'Audi'? I pridict ture " );
// console.log(car === "Audi");
// //test no 2
// console.log("Is car == 'Audi'? I pridict ture " );
// console.log(car == "Audi");
// // test no 3
// console.log("Is car != 'civic'? I pridict ture " );
// console.log(car != "civic");
// //test no 4
// console.log("Is car !== 'civic'? I pridict ture " );
// console.log(car !== "civic");
// // test no 5
// console.log("Is car is Uppper case  == 'Audi'? I pridict false " );
// console.log(car.toUpperCase() == "Audi");
// // test no 6
// console.log("Is car is lower carse  == 'Audi'? I pridict false " );
// console.log(car.toLowerCase()  == "Audi");
// // test no 7
// console.log("Is car === 'Train'? I pridict false" );
// console.log(car === "train");
// // test no 8  
// console.log("Is car === 'cycle'? I pridict false" );
// console.log(car === "train");
// // test no 9 
// console.log("Is car === 'Train' or bus? I pridict false" );
// console.log(car === "train" || car==="bus" );
// //test no 10
// console.log("Is car ==  Audi  ? I pridict true ");
// console.log(car == "Audi" && car =="Audi");
// Question 24
// Equality with strings
// console.log("Testing equality with strings:");
// console.log("book" == "book"); // True
// console.log(("book" as string) == "book"); // False
// // Using the lower case function
// console.log("Testing with lower case:");
// console.log("Apple".toLowerCase() == "apple"); // True
// // Numerical tests
// console.log("Numerical tests:");
// console.log(10 > 5); // True
// console.log(2 < 1); // False
// // "and" and "or" operators
// console.log("Tests with 'and' and 'or':");
// console.log(true && false); // False
// console.log(true || false); // True
// // Item is in a array
// let fruits = ["apple", "banana", "cherry"];
// console.log("Is 'apple' in fruits?");
// console.log(fruits.includes("apple")); // True
// // Item is not in a array
// console.log("Is 'mango' not in fruits?");
// console.log(!fruits.includes("mango")); // True
// Question 25
// let alianColour:string="Yellow";
// if (alianColour=="yellow"){
//     console.log('you earn 5 points')
// };
// alianColour="green";
// if ( alianColour== "green "){
//     console.log('you earn 10 points ')};
// Question 26
// let alianColour:string="green";
// if (alianColour=="green"){
//     console.log('you earn 5 points')
// }
// else if (alianColour!="green"){
//     console.log('you earn 10 points ')
// };
// let alianColour:string="yellow";
// if (alianColour=="green"){
//     console.log('you earn 5 points')
// }
// else if (alianColour!="green"){
//     console.log('you earn 10 points ')
// };
// Question 27
///   first -version 
// let alianColour:string="green";
// if(alianColour=="green"){
//     console.log('you earn 5 points')
// }
// else if(alianColour=="yellow"){
//     console.log('you earn 10 points')
// }
// else if(alianColour=="red"){
//     console.log('you earn 15 points')
///}
//// second -version
// let alianColour:string="yellow";
// if(alianColour=="green"){
//     console.log('you earn 5 points')
// }
// else if(alianColour=="yellow"){
//     console.log('you earn 10 points')
// }
// else if(alianColour=="red"){
//     console.log('you earn 15 points')
// }
// third -version
// let alianColour:string="red";
// if(alianColour=="green"){
//     console.log('you earn 5 points')
// }
// else if(alianColour=="yellow"){
//     console.log('you earn 10 points')
// }
// else if(alianColour=="red"){
//     console.log('you earn 15 points')
// }
// // Question 28
// let userAge:number=parseInt(prompt("enter age :"));
// if(userAge<2){
//     console.log('the person is a baby')
// }
// else if(userAge>=2 && userAge<=4){
//     console.log('the person is a toddler')
// }
// else if(userAge>=4 && userAge<=13){
//     console.log('the person is a kid')
// }
// else if(userAge>=13 && userAge<=20){
//     console.log('the person is a teenager')
// }
// else if(userAge>=20 && userAge<=65){
//     console.log('the person is an adult')
// }
// else if(userAge>=65){
//     console.log('the person is an elder')
// }
// / Question 29
// let favorite_fruits:string[]=["apple","mango","orange"]
// if(favorite_fruits.includes("apple")){
//     console.log("you really like apple")
// }
// if(favorite_fruits.includes("mango")){
//     console.log("you really like mango")
// }
// if(favorite_fruits.includes("orange")){
//     console.log("you really like orange")
// }
// /// Question 30
// let usernames:string[]=["admin","ali","ahmed","faraz","maaz"]
// for(let i=0; i<usernames.length; i++){
//     if(usernames[i]=="admin"){
//         console.log("Hello admin, would you like to see a status report?")
//     }
//     else{
//         console.log(`Hello ${usernames[i]}, thank you for logging in again.`)
//     }
// }
// Question 31
// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let usernames:string[]=["admin","ali","ahmed","faraz","maaz"]
// if(usernames.length==0){
//     console.log("We need to find some users!")
// }
// else{
//     for(let i=0; i<usernames.length; i++){
//         if(usernames[i]=="admin"){
//             console.log("Hello admin, would you like to see a status report?")
//         }
//        
// Question 32
// let currentUser:string[]=[
//     "admin","ali","ahmed","faraz","maaz","shahzaib"
// ];
// let newUser:string[]=[
//     "ali","Essa","faraz","maaz","Arsalan"
// ];
// const currentUsersLower: string[] = currentUser.map(user => user.toLowerCase());
// for (const user of newUser) {
//     if (currentUsersLower.includes(user.toLowerCase())) {
//         console.log(`Username '${user}' is already taken. Please choose a different username.`);
//     } else {
//         console.log(`Username '${user}' is available.`);
//     }
// }
/// Question 33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let number of numbers) {
//     let num= "th";
//     if (number === 1) {
//         num= "st";
//     } else if (number === 2) {
//         num = "nd";
//     } else if (number === 3) {
//         num = "rd";
//     }else if(number === 4){
//         num = "th";
//     }else{
//         num = "th" 
//     } 
//     console.log(`${number}${num}`);
// }
//Question 34
// let favPizza:string[] =["Margherita","Peproni","BBQ"];
// for(let i=0; i<favPizza.length; i++){
//     console.log(`I like ${favPizza[i]} pizza`)
// }
// console.log("I really love pizza!")
// // Question 35
// let Animal:string[] =["dog","cat","horse"]
// for(let i=0; i<Animal.length; i++){
//     console.log(`A ${Animal[i]} would make a great pet`)
// }
// console.log("Any of these animals would make a great pet")
// Question 36
// function make_shirt(size:string,message:string){
//     console.log(`The size of the shirt is ${size} and the message is ${message}`)
// }     
// Question 37
// function makeShirt(message:string="I love typescript ",size:string="large"){
//     return `The size of the shirt is ${size} and the message is ${message}`
// }
// console.log(makeShirt("medim","i love "));
// console.log(makeShirt());
// Question  38
// function describeCity(city:string,country:string="pakistan"){
//     return `${city} is in ${country} `
// }
// // enter city name and country
// console.log(describeCity("karachi","pakistan"));
// console.log(describeCity("Mumbai","india"));
// console.log(describeCity("Islamabad"));
////    OR
function describeCity(city, country = "pakistan") {
    console.log(`${city} is in ${country} `);
}
// enter city name and country
// describeCity("karachi","pakistan");
// describeCity("Mumbai","india");
// describeCity("lahore");
describeCity("mumbai");
