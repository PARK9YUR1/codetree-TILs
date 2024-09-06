const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = Number(n);

let ans;

if (n >= 90) {
    ans = "A";
} else if (n >= 80) {
    ans = "B";
} else if (n >= 70) {
    ans = "C";
} else if (n >= 60) {
    ans = "D";
} else {
    ans = "F";
}

console.log(ans)