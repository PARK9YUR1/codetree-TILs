const fs = require("fs");

let [a, b, c] = fs.readFileSync(0).toString().split("\n").map(num => Number(num));

console.log(`${a.toFixed(3)}
${b.toFixed(3)}
${c.toFixed(3)}`);