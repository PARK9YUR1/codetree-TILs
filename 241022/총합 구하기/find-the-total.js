const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(n => parseInt(n));
let sum = 0;

for (let n=a; n<=b; n++) {
    if ((n % 6 === 0) && (n % 8)) {
        sum += n;
    }
}

console.log(sum);