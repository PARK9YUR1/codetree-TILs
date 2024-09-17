const fs = require("fs");

let y = fs.readFileSync(0).toString().trim();
y = parseInt(y);

let ans;

if (y % 4) {
    ans = false;
} else {
    if (y % 100 === 0 && y % 400) {
        ans = false;
    } else {
        ans = true;
    }
}

console.log(ans);