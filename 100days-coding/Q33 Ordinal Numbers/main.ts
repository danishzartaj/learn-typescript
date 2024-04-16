/// Question 33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let num= "th";
    if (number === 1) {
        num= "st";
    } else if (number === 2) {
        num = "nd";
    } else if (number === 3) {
        num = "rd";
    }else if(number === 4){
        num = "th";
    }else{
        num = "th" 
    } 
    console.log(`${number}${num}`);
}
