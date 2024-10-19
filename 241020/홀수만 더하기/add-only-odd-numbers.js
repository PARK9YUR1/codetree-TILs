const fs = require("fs");

let arr = fs.readFileSync(0).toString().split("\n").map(n => parseInt(n));
let n = arr[0];
let nums = arr.slice(1);
let sum = 0;

for (let i=0; i<n; i++) {
    let num = nums[i];

    if ((num % 2) && (num % 3 === 0)) {
        sum += num;
    }
}

console.log(sum);