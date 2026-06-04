// With reduce()method
// Problem 1: Sum of all numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Problem 2: Product of all numbers
const nums = [1, 2, 3, 4];
const product = nums.reduce((acc, curr) => acc * curr, 1);
console.log(product);

// Problem 3: Total shopping cart price
const cart = [499, 299, 199, 99];
const totalPrice = cart.reduce((acc, curr) => acc + curr, 0);
console.log(totalPrice);

// Problem 4: Count total characters
const words = [ "hello" , "world" , "javascript"];
const totalCharacters = words.reduce((acc, curr) => acc + curr.length, 0);
console.log(totalCharacters);