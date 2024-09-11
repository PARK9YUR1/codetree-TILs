const fs = require("fs");

let [left, right] = fs.readFileSync(0).toString().split("\n").map(num => Number(num));

if (left >= 1.0 && right >= 1.0) {
    console.log("High");
} else if (left >= 0.5 && right >= 0.5) {
    console.log("Middle");
} else {
    console.log("Low");
}