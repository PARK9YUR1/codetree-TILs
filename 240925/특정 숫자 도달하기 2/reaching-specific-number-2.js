const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);

let res = "";

for (let i=n; i>=1; i--) {
    res += i + " ";
}

console.log(res);