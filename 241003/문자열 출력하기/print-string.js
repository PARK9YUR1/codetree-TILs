const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);

for (let i=0; i<n; i++) {
    console.log("LeebrosCode");
}