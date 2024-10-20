const fs = require("fs");

let nums = fs.readFileSync(0).toString().split("\n").map(n => parseInt(n));
let sum = 0;
let cnt = 0;

for (let i=0; i<10; i++) {
    let num = nums[i];
    if (num >= 0 && num <= 200) {
        cnt++;
        sum += num;
    }
}

let avg = (sum / cnt).toFixed(1);

console.log(sum, avg);