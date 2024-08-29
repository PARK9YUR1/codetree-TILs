const fs = require("fs");

let [x, y] = fs.readFileSync(0).toString().split(" ").map(num => parseInt(num));

console.log(`${x} * ${y} = ${x * y}
${x} / ${y} = ${parseInt(x / y)}`);