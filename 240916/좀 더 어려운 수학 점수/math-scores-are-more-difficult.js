const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split("\n").map(score => score.split(" ").map(s => Number(s)));

if (a[0] > b[0] || (a[0] === b[0] && a[1] > b[1])) {
    console.log("A");
} else  {
    console.log("B");
}