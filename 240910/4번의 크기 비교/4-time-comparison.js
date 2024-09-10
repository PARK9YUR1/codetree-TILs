const fs = require("fs");

let [a, nums] = fs.readFileSync(0).toString().split("\n");
a = parseInt(a);
nums = nums.split(" ").map(num => parseInt(num));

for (let i=0; i<nums.length; i++) {
    let num = nums[i];
    console.log(a > num ? 1 : 0);
}