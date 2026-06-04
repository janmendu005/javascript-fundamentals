// Function Declaration
function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Janmendu");

// Function Expression
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));

// Arrow Function
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 3));