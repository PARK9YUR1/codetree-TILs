const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);
let res = "";

for (let s=n; s<=100; s++) {
    if (s >= 90) {
        res += "A ";
    } else if (s >= 80) {
        res += "B ";
    } else if (s >= 70) {
        res += "C ";
    } else if (s >= 60) {
        res += "D ";
    } else {
        res += "F ";
    }
}

console.log(res);