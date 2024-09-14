const fs = require("fs");

let m = fs.readFileSync(0).toString().trim();
m = parseInt(m);

if (m >= 12 || m <= 2) {
    console.log("Winter");
} else if (m <= 5) {
    console.log("Spring");
} else if (m <= 8) {
    console.log("Summer");
} else {
    console.log("Fall");
}