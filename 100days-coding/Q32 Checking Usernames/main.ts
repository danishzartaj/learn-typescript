
// Question 32
let currentUser:string[]=[
    "admin","ali","ahmed","faraz","maaz","shahzaib"
];
let newUser:string[]=[
    "ali","Essa","faraz","maaz","Arsalan"
];
const currentUsersLower: string[] = currentUser.map(user => user.toLowerCase());

for (const user of newUser) {
    if (currentUsersLower.includes(user.toLowerCase())) {
        console.log(`Username '${user}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Username '${user}' is available.`);
    }
}