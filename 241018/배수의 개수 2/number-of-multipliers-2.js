const fs = require("fs");

let nums = fs.readFileSync(0).toString().split("\n").map(n => parseInt(n));
let odd = 0;

for (let i=0; i<nums.length; i++) {
    if (nums[i] % 2) {
        odd++;
    }
}

console.log(odd);