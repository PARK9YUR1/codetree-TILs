const fs = require("fs");

let [x, y] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));

x += 8;
y *= 3;

console.log("%d\n%d\n%d", x, y, x*y);