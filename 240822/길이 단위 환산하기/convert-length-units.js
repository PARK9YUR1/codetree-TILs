const fs = require("fs");

const ft = 30.48;
let n = fs.readFileSync(0).toString();
n = Number(n) * ft;

console.log(n.toFixed(1));