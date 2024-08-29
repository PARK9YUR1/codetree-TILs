const fs = require("fs");

let [x, y] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));

console.log("%d...%d", parseInt(x/y), x%y);