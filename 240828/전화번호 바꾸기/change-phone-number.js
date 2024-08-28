const fs = require("fs");

let [x, y, z] = fs.readFileSync(0).toString().split("-");

console.log("%s-%s-%s", x, z, y);