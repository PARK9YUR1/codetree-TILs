const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split("\n").map(num => parseInt(num));

a += 87;
b %= 10;

console.log("%d\n%d", a, b);