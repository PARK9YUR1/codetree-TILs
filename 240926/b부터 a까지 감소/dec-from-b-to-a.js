const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));
let res = "";

for (i=b; i>=a; i--) {
    res += i + " ";
}

console.log(res);