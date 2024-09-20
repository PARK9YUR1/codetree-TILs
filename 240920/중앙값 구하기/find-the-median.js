const fs = require("fs");

let [a, b, c] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));

if ((a < b && a > c) || (a > b && a < c)) {
    console.log(a);
} else if ((b < a && b > c) || (b > a && b < c)) {
    console.log(b);
} else {
    console.log(c);
}