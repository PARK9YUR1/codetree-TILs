const fs = require("fs");

let n = fs.readFileSync(0).toString().trim();
n = parseInt(n);

let cnt = 0;

for (let y=1; y<=n; y++) {
    if (y % 4 === 0) {
        if ((y % 100 === 0) && (y % 400)) {
            continue;
        }
        cnt++;
    }
}

console.log(cnt);