const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));
let sum = a+b;
let avg = sum/2.0;

console.log(sum, avg);