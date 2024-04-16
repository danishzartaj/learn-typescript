"use strict";
// Question 32
let currentUser = [
    "admin", "ali", "ahmed", "faraz", "maaz", "shahzaib"
];
let newUser = [
    "ali", "Essa", "faraz", "maaz", "Arsalan"
];
const currentUsersLower = currentUser.map(user => user.toLowerCase());
for (const user of newUser) {
    if (currentUsersLower.includes(user.toLowerCase())) {
        console.log(`Username '${user}' is already taken. Please choose a different username.`);
    }
    else {
        console.log(`Username '${user}' is available.`);
    }
}
