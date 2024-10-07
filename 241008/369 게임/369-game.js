const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);
let cur = 1;
let res = "";

while (cur <= n) {
    if (cur % 3 === 0) {
        res += "0 ";
    } else if (cur.toString().indexOf("3") >= 0 || cur.toString().indexOf("6") >= 0 || cur.toString().indexOf("9") >= 0) {
        res += "0 ";
    } else {
        res += cur + " ";
    }
    cur++;
}

console.log(res);