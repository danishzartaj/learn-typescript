/// Question 45
function makeCar(manufacturer: string, model: string, ...options: string[]): 
{ manufacturer: string; model: string; [key: string]: string } {
    const car: { manufacturer: string; model: string; [key: string]: string } = {
        manufacturer,
        model,
    };

       for (const option of options) {
        const [key, value] = option.split('=');
        car[key] = value;
    }

    return car;
};


const car1 = makeCar("Toyota", "Camry", "color=blue", "sunroof=true");
const car2 = makeCar("Tesla", "Model 3", "color=red", "autopilot=true");
const car3 = makeCar("Honda", "Civic", "color=gray");
console.log("Car 1:", car1);
console.log("Car 2:", car2);
console.log("Car 3:", car3);