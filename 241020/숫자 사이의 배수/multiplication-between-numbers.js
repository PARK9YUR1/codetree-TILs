const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(n => parseInt(n));
let sum = 0;
let cnt = 0;

for (let n=a; n<=b; n++) {
    if ((n % 5 === 0) || (n % 7 === 0)) {
        sum += n;
        cnt++;
    }
}

let avg = (sum / cnt).toFixed(1);
console.log(sum, avg);