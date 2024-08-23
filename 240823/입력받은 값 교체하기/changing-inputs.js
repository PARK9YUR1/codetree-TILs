const fs = require("fs");

let nums = fs.readFileSync(0).toString();
let [a, b] = nums.split(" ").map(num => parseInt(num));
[a, b] = [b, a];

console.log(a, b);