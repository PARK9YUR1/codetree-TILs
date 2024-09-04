const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));

if (a > b) {
    console.log(a * b);
} else {
    console.log(parseInt(b / a));
}