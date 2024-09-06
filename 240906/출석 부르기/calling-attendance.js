const fs = require("fs");

let a = fs.readFileSync(0).toString().trim();
a = Number(a);

let ans;

if (a === 1) {
    ans = "John";
} else if (a === 2) {
    ans = "Tom";
} else if (a === 3) {
    ans = "Paul";
} else {
    ans = "Vacancy";
}

console.log(ans)