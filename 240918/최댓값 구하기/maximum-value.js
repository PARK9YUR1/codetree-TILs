const fs = require("fs");

let [a, b, c] = fs.readFileSync(0).toString().split(" ").map(n => Number(n));
let mx;

if (a >= b && a >= c) {
    mx = a;
} else if (b >= a && b >= c) {
    mx = b;
} else {
    mx = c;
}

console.log(mx);