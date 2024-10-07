const fs = require("fs");

let nums = fs.readFileSync(0).toString().split("\n").map(n => parseInt(n));

for (let i=0; i<nums.length; i++) {
    let n = nums[i];
    if ((n % 2) && (n % 3 === 0)) {
        console.log(n);
    }
}