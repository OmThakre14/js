// calc.js

const { add, subtract, multiply, divide } = require('./src/calculator');

// Perform some calculations
console.log("1 + 2 =", add(1, 2));
console.log("3 - 1 =", subtract(3, 1));
console.log("2 * 4 =", multiply(2, 4));
console.log("10 / 2 =", divide(10, 2));
