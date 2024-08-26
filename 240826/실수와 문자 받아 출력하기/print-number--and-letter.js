const fs = require("fs");

let [c, a, b] = fs.readFileSync(0).toString().split("\n");
[a, b] = [a, b].map(num => Number(num));

console.log(`${c}
${a.toFixed(2)}
${b.toFixed(2)}`);