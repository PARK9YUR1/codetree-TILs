const fs = require("fs");

let a = fs.readFileSync(0).toString().trim();
a = parseInt(a);

if (a < 10 || a > 20) {
    console.log("yes");
} else {
    console.log("no");
}