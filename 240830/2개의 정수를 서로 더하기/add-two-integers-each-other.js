const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));

a += b;
b += a;

console.log("%d %d", a, b);