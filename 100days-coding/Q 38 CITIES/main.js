"use strict";
// Question  38
function describeCity(city, country = "pakistan") {
    return `${city} is in ${country} `;
}
// enter city name and country
console.log(describeCity("karachi", "pakistan"));
console.log(describeCity("Mumbai", "india"));
console.log(describeCity("Islamabad"));
//    OR
// function describeCity(city:string,country:string="pakistan"){
// //     console.log( `${city} is in ${country} `)
// }
// enter city name and country
// describeCity("karachi","pakistan");
// describeCity("Mumbai","india");
// describeCity("lahore");
