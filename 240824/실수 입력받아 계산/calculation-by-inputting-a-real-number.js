const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split("\n").map(num => Number(num));

console.log((a + b).toFixed(2));