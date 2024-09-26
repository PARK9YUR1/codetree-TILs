const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));
let res = "";

for (i=a; i>=b; i-=2) {
    res += i + " ";
}

console.log(res);