const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = Number(n);

let ans = "";

if (n < 0) {
    ans = "ice";
} else if (n >= 100) {
    ans = "vapor";
} else {
    ans = "water";
}

console.log(ans)