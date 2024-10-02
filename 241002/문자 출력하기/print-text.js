const fs = require("fs");

let s = fs.readFileSync(0).toString();
let res = "";

for (let i=0; i<8; i++) {
    res += s;
}

console.log(res);