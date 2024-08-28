const fs = require("fs");

let [y, m, d] = fs.readFileSync(0).toString().split(".");

console.log([m, d, y].join("-"));