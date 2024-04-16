/// Question 17 
let Guest_Name:string[] = [" Elon mush"," Bill gates"," Waren buffet"," Mukesh ambani"] 
for(let i=0; i<Guest_Name.length; i++ ){
console.log("Mr "+ Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t" )}
console.log('our one guest is not coming so we are invite one more guest ')
let new_Guest:string= "sir zia";
Guest_Name[2] = new_Guest;
let absent_Guest:string= "Waren buffet"
console.log(`Mr.${absent_Guest} is not coming. `)
console.log(`"Mr "${new_Guest}"\t\nit is our pleasure to invite you  in party \n\t"`)
console.log("we are invite 3 more friend! ")
Guest_Name.push("Imran khan", " Mark zakurbug"," kamran tessori" );
for(let i=0; i<Guest_Name.length; i++ ){
console.log("Mr "+ Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t" )};
// We can only invite two people for dinner
console.log("\nOops! The dinner table won't arrive in time. We can only invite two people.");
console.log("Apologies to the other guests.");

// Remove guests until only two remain
while (Guest_Name.length > 2) {
    const removedGuest = Guest_Name.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitations for the remaining two guests
console.log(`\n${Guest_Name[0]} and ${Guest_Name[1]}, you're still invited!`);

// Empty the guest list
Guest_Name = [];
console.log("\nEmpty guest list:");
console.log(Guest_Name);
