const fs = require("fs");

let a = fs.readFileSync(0).toString().trim();
a = Number(a);

let ans;

if (a >= 1.0) {
    ans = "High";
} else if (a >= 0.5) {
    ans = "Middle";
} else {
    ans = "Low";
}

console.log(ans)