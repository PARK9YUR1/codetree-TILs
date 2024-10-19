const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);
let sum = 0;

for (let i=n; i<=100; i++) {
    sum += i;
}

console.log(sum);