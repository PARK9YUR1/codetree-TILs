const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split("\n").map(num => parseInt(num));

console.log(a, b);