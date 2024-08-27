const fs = require("fs");

let answer = fs.readFileSync(0).toString().split("-").join("");

console.log(answer);