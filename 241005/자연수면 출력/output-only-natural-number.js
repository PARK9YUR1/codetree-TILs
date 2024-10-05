const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(n => parseInt(n));

if (a > 0) {
    console.log(a.toString().repeat(b));
} else {
    console.log(0);
}