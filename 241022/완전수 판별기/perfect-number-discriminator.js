const fs = require("fs");

let num = fs.readFileSync(0).toString().trim();
num = parseInt(num);
let res = 0;

for (let n=1; n<num; n++) {
    if (num % n === 0) {
        res += n;
    }
}

if (res === num) {
    console.log("P");
} else {
    console.log("N");
}