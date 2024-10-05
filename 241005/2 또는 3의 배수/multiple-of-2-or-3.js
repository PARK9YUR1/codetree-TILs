const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);
let res = "";

for (let i=1; i<=n; i++) {
    if (i%2 && i%3) {
        res += "0 ";
    } else {
        res += "1 ";
    }
}

console.log(res);