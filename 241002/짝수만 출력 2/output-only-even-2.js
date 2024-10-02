const fs = require("fs");

let [b, a] = fs.readFileSync(0).toString().split(" ").map(n => parseInt(n));
let res = "";

while (b >= a) {
    res += b + " ";
    b -= 2;
}

console.log(res);