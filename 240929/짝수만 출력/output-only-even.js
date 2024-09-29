const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(n => parseInt(n));

if (a % 2) {
    a++;
}

let res = "";
let n = a;

while (n <= b) {
    res += n + " ";
    n += 2;
}

console.log(res);