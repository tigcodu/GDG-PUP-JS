// Step 1: Create a car object
let car;

// Step 2: Create a function to describe the car
function getDescription(car) {
    car = {
    make: "Toyota",
    model: "Corolla",
    year: "2021"
    };

    console.log(`This car is a ${car.year} ${car.make} ${car.model}.`);
}

// Step 3: Call the function and display the result
console.log(getDescription(car));