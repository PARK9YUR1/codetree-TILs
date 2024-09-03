const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);

console.log(n**2);
if (n < 5) {
    console.log("tiny");
}