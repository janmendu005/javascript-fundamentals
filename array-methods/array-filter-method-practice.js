// With filter()method
// Problem 1: Filter out ages under 18
const ages = [12, 18, 25];
const adults = ages.filter(age => age >= 18);
console.log(adults);
// Problem 2: keep only even numbers
const nums = [1, 2, 3, 4, 5, 6];
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Problem 3: keep only odd numbers
const nums2 = [1, 2, 3, 4, 5, 6];
const oddNumbers = nums2.filter(num => num % 2 !== 0);
console.log(oddNumbers);
// Problem 4: Filtering strings
const fruits = ["Apple", "Banana", "Mango", "Avocado"];
const aFruits = fruits.filter(fruit => fruit.startsWith("A"));
console.log(aFruits);
// Problem 5: Filter out names longer than 4 letters
const names = ["Alice", "Bob", "Charlie", "Dave"];
const longNames = names.filter(name => name.length > 4);
console.log(longNames);
// Problem 6: Filter out scores below 50
const scores = [45, 82, 67, 90, 35];
const failed = scores.filter(score => score < 50);
console.log(failed);
// Problem 7: Product under 1000
const products = [500, 1500, 800, 2000];
const affordable = products.filter(price => price < 1000);
console.log(affordable);
