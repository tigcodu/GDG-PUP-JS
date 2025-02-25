function checkAge() {
    // write your code here 
    const age = document.getElementById('ageInput').value;
    let category;

    if (age < 0) {
        category = "Invalid age. Please enter a valid number.";
    }
    else if (age >= 0 && age <= 12) {
        category = "Child";
    }
    else if (age >= 13 && age <= 19) {
        category = "Teen";
    }
    else {
        category = "Adult";
    }
    
    
    document.getElementById('result').innerHTML = "You are a(n): " + category;
}


