const fs = require("fs");

let [c, n] = fs.readFileSync(0).toString().split(" ");
n = parseInt(n);

let res = "";

if (c === "A") {
    for (let i=1; i<=n; i++) {
        res += i + " ";
    }
} else if (c === "D") {
    for (let i=n; i>=1; i--) {
        res += i + " ";
    }
}

console.log(res);