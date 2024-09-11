const fs = require("fs");

let [a, b, c] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));
let ans1;
let ans2;

if (a <= b && a <= c) {
    ans1 = 1;
} else {
    ans1 = 0;
}

if (a === b && b === c) {
    ans2 = 1;
} else {
    ans2 = 0;
}

console.log(ans1, ans2);