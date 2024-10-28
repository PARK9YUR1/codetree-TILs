const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(n => parseInt(n));
let res = 1;

for (let n=a; n<=b; n++) {
    res *= n;
}

console.log(res);