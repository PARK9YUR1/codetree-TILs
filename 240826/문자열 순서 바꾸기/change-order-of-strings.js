const fs = require("fs");

let [t, s] = fs.readFileSync(0).toString().split("\n");
[t, s] = [s, t];

console.log("%s\n%s", t, s);