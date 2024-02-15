let fruits = ["Apple", "Pear", "Orange", 5, 7, 10];

// map allows you to "create" a new array using the values in the old one
const normalizedFruits = fruits.map((fruit) => {
  return typeof fruit === "string" ? fruit : "Not a fruit";
});

// map allows you to remove elements from an array without mutating it in place
const filteredFruits = fruits.filter((fruit) => {
  return typeof fruit === "string";
});

const numbers = [1, 4, 5, 9];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);
