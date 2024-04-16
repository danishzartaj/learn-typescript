"use strict";
/// Question 15
let Guest_Name = [" Elon mush", " Bill gates", " Waren buffet", " Mukesh Ambani "];
let new_Guest = "sir zia ";
Guest_Name[2] = new_Guest;
let absent_Guest = "Waren buffet";
for (let i = 0; i < Guest_Name.length; i++) {
    console.log("Mr " + Guest_Name[i] + "\t\nit is our pleasure to invite you  in party \n\t");
}
console.log(`Mr.${absent_Guest} is not coming. `);
