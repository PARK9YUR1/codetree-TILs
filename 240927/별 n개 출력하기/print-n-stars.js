const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);

while (n) {
    console.log("*");
    n--;
}