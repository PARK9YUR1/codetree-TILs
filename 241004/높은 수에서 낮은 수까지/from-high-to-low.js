const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(n => parseInt(n));
let res = "";

if (a < b) {
    for (let i=b; i>=a; i--) {
        res += i + " ";
    }
} else {
    for (let i=a; i>=b; i--) {
        res += i + " ";
    }
}

console.log(res);