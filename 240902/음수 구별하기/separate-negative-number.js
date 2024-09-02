const fs = require("fs");

let num = fs.readFileSync(0).toString().trim();

console.log(num);
if (Number(num) < 0) {
    console.log("minus");
}