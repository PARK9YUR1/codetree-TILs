const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);

let d;

if (n === 2) {
    d = 28;
} else if ((n < 8 && n % 2) || (n >= 8 && n % 2 === 0)) {
    d = 31;
} else {
    d = 30;
}

console.log(d);