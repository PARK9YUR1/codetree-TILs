const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);

let res = "";

while (n) {
    res += n + " ";
    n--;
}

console.log(res);