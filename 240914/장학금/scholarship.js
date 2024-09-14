const fs = require("fs");

let [x, y] = fs.readFileSync(0).toString().split(" ").map(num => Number(num));

if (x < 90) {
    console.log(0);
} else if (y >= 95) {
    console.log(100000);
} else if (y >= 90) {
    console.log(50000);
} else  {
    console.log(0);
}