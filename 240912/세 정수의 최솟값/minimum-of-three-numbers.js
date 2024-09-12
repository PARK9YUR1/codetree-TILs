const fs = require("fs");

let [a, b, c] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));
let mn;

if (a <= b && a <= c) {
    mn = a;
} else if (b <= a && b <= c) {
    mn = b;
} else {
    mn = c;
}

console.log(mn);