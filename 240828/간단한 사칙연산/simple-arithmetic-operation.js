const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));

console.log(a + b);
console.log(a - b);
console.log(parseInt(a / b));
console.log(a % b);