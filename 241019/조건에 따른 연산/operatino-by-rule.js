const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(arr[0])
let cnt = 0;

while(true) {
    if (n % 2 === 0) {
        n = (n * 3) + 1;
    } else {
        n = (n * 2) + 2;
    }

    cnt += 1;

    if(n >= 1000) {
        break;
    }
}

console.log(cnt);