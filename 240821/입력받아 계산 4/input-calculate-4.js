const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = parseInt(a);

console.log(a * 2);