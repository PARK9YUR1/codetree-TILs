const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split("\n").map(info => info.split(" ").map((v, i) => i ? v : Number(v)));

if ((a[0] >= 19 && a[1] === "M") || (b[0] >= 19 && b[1] === "M")) {
    console.log(1);
} else {
    console.log(0);
}