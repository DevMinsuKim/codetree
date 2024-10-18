const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0])

let result = ''
for (let i = 1; i <= a; i++) {
    if (i % 2 === 0 && i % 4 !== 0) {
        continue;
    }
    if (parseInt(i / 8) % 2 === 0) {
        continue;
    }
    if ((i % 7) < 4 ) {
        continue;
    }
    result += i + " "
}

console.log(result);