// Creating an array of strings
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

// Creating an array of numbers
const marks = [80, 90, 75, 88];
console.log(marks);
// Accessing elements using index
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Accessing elements using index
const colors = ["Red", "Blue", "Green"];
console.log(colors[1]);

// Use of push,pop,unshift,shift
const fruits = ["Apple", "Banana"];
console.log("Original:", fruits);

fruits.push("Mango");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.unshift("Orange");
console.log("After unshift:", fruits);

fruits.shift();
console.log("After shift:", fruits);

// Practice Exercise: Create an array of numbers and perform the following operations:
const numbers = [10, 20];

numbers.push(30);
numbers.unshift(5);
numbers.pop();

console.log(numbers);