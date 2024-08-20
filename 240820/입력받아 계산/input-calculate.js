const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = parseInt(a) + 2;

console.log(a);