const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(n => parseInt(n));
let n = a;
let res = "";

while (n <= b) {
    res += n + " ";
    if (n % 2) {
        n *= 2;
    } else {
        n += 3;
    }
}

console.log(res);