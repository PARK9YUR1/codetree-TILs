const fs = require("fs");

let [a, b, c] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));
let sum = a + b + c;
let avg = parseInt(sum / 3);

console.log("%d\n%d", sum, avg);