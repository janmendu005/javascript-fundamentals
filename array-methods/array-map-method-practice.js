// With map() method
// Problem 1:Double every number
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 
// Problem 2: Add 10 to each number
const nums = [1, 2, 3];
const result = nums.map(num => num + 10);
console.log(result);
// Problem 3:Square each number
const nums2 = [1, 2, 3];
const squared = nums2.map(num => num ** 2);
console.log(squared);
// Problem 4: Convert name to uppercase
const names = ["alice", "bob", "charlie"];
const uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames);