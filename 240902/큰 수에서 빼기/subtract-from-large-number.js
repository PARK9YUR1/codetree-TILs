const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));
let mx;
let mn;

if (a > b) {
    mx = a;
    mn = b;
} else {
    mx = b;
    mn = a;
}

console.log(mx-mn);