const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = Number(n);

let ans;

if (n >= 3000) {
    ans = "book";
} else if (n >= 1000) {
    ans = "mask";
} else {
    ans = "no";
}

console.log(ans)