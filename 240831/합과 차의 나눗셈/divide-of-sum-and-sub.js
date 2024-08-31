const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));
let c = (a+b) / (a-b);

console.log(c.toFixed(2));