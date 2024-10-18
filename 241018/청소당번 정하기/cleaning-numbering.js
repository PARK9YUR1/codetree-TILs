const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);

let a = 0;  // 교실 청소 (2일마다)
let b = 0;  // 복도 청소 (3일마다)
let c = 0;  // 화장실 청소 (12일마다)

for (let d=1; d<=n; d++) {
    if (d % 12 === 0) {
        c++;
    } else if (d % 3 === 0) {
        b++;
    } else if (d % 2 === 0) {
        a++;
    }
}

console.log(a, b, c);