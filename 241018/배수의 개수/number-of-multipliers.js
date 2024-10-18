const fs = require("fs");

let nums = fs.readFileSync(0).toString().split("\n").map(n => parseInt(n));
let a = 0;  // 3의 배수
let b = 0;  // 5의 배수

for (let i=0; i<10; i++) {
    if (nums[i] % 3 === 0) {
        a++;
    }

    if (nums[i] % 5 === 0) {
        b++;
    }
}

console.log(a, b);