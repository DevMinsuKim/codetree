const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(arr[0])
let x = 1;
let cnt = 0;

while(true) {
    n = parseInt(n / x)
    x += 1;
    cnt += 1;
    
    if (n <= 1) {
        break;
    }
}

console.log(cnt);