const fs = require("fs");

let arr = fs.readFileSync(0).toString().split("\n");
let [a, b] = arr[0].split(" ").map(num => parseInt(num));
let c = parseInt(arr[1]);

console.log(a, b, c);