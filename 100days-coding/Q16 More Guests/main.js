"use strict";
// Question 16
let Guest_Name = [" Elon mush", " Bill gates", " Waren buffet", " Mukesh ambani"];
for (let i = 0; i < Guest_Name.length; i++) {
    console.log("Mr " + Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t");
}
console.log('our one guest is not coming so we are invite one more guest ');
let new_Guest = "sir zia ";
Guest_Name[2] = new_Guest;
let absent_Guest = "Waren buffet";
console.log(`Mr.${absent_Guest} is not coming. `);
console.log(`"Mr "${new_Guest}  "\t\nit is our pleasure to invite you  in party \n\t"`);
console.log("we are invite 3 more friend! ");
Guest_Name.push("Imran khan", " Mark zakurbug", " kamran tessori");
for (let i = 0; i < Guest_Name.length; i++) {
    console.log("Mr " + Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t");
}
;
