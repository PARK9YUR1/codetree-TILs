const fs = require("fs");

let arr = fs.readFileSync(0).toString().split("\n").map(n => parseInt(n));
let len = arr[0];
let nums = arr.slice(1);

for (let i=0; i<len; i++) {
    let n = nums[i];
    if ((n % 2) && (n % 3 === 0)) {
        console.log(n);
    }
}