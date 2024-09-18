const fs = require("fs");

let records = fs.readFileSync(0).toString().split("\n").map(record => record.split(" ").map((v, i) => i ? Number(v) : v));
let a = 0;

for (let i=0; i<records.length; i++) {
    let record = records[i];
    if (record[0] === "Y") {
        if (record[1] >= 37) {
            a++;
        }
    }
}

if (a >= 2) {
    console.log("E");
} else {
    console.log("N");
}