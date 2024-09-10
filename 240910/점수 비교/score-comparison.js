const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split("\n").map(score => score.split(" ").map(num => Number(num)));

if (a[0] > b[0] && a[1] > b[1]) {
    console.log(1);
} else {
    console.log(0);
}