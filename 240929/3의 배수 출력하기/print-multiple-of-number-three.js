const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);

let res = "";
let i = 3;

while (i <= n) {
    res += i + " ";
    i += 3;
}

console.log(res);