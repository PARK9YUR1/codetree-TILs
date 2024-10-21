const fs = require("fs");

let arr = fs.readFileSync(0).toString().split("\n").map(n => parseInt(n));
let n = arr[0];
let nums = arr.slice(1);
let sum = 0;

for (let i=0; i<n; i++) {
    sum += nums[i];
}

let avg = (sum / n).toFixed(1);

console.log(sum, avg);