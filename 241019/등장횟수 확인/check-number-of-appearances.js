const fs = require("fs");

let nums = fs.readFileSync(0).toString().split("\n").map(n => parseInt(n));
let even = 0;

for (let i=0; i<5; i++) {
    if (nums[i] % 2 === 0) {
        even++;
    }
}

console.log(even);