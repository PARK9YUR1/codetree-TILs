const fs = require("fs");

let [a, b] = fs.readFileSync(0).toString().split(" ").map(n => parseInt(n));
let result = parseInt(a / b) + ".";
let remainder = a % b;  // 나머지

for (let i = 0; i < 20; i++) {
    remainder *= 10;
    result += parseInt(remainder / b);
    remainder %= b;
}
  
console.log(result);