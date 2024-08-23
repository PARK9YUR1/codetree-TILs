const fs = require("fs");

let nums = fs.readFileSync(0).toString();
let [a, b] = nums.split(" ").map(num => parseInt(num));

console.log(a + b);