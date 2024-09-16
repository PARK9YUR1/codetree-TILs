const fs = require("fs");

let [gender, age] = fs.readFileSync(0).toString().split("\n").map(v => Number(v));

if (gender) {
    if (age >= 19) {
        console.log("WOMAN");
    } else {
        console.log("GIRL");
    }
} else  {
    if (age >= 19) {
        console.log("MAN");
    } else {
        console.log("BOY");
    }
}