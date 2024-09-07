const fs = require("fs");

let s = fs.readFileSync(0).toString().trim();
let ans;

if (s === "S") {
    ans = "Superior";
} else if (s === "A") {
    ans = "Excellent";
} else if (s === "B") {
    ans = "Good";
} else if (s === "C") {
    ans = "Usually";
} else if (s === "D") {
    ans = "Effort";
} else {
    ans = "Failure";
}

console.log(ans)