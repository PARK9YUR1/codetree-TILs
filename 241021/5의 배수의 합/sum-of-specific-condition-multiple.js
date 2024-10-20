const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(n => parseInt(n));
let sum = 0;
let [mn, mx] = [a, b];

if (a > b) {
    mn = b;
    mx = a;
}

for (let n=mn; n<=mx; n++) {
    if ((n % 5 === 0)) {
        sum += n;
    }
}

console.log(sum);