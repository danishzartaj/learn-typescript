/// Question 44
function makeSandwich(ingredients: string[]){
    console.log("making your sandwich is !  ");
    for (const item of ingredients) {
        console.log(`- ${item}`);
    }
    console.log("\n");
}

// Call the function with different ingredients
makeSandwich(["Lettuce", "Tomato", "Turkey"]);
makeSandwich(["Bacon", "Egg", "Cheese", "Avocado"]);
makeSandwich(["Ham", "Swiss Cheese"]);