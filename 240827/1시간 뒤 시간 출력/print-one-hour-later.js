const fs = require("fs");

let [h, m] = fs.readFileSync(0).toString().split(":").map(num => Number(num));

console.log("%d:%d", h+1, m);