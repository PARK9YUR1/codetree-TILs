const fs = require("fs");

let n = fs.readFileSync(0).toString();
n = parseInt(n);

console.log("Your score is %d point.", n);