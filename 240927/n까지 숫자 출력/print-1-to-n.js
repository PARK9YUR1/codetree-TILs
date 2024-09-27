const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);

let i = 1;
let res = "";

while (i <= n) {
    res += i + " ";
    i++;
}

console.log(res);