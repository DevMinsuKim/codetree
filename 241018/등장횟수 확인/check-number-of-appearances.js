const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0;

for(let i = 0; i < 5; i++) {
    let x = Number(arr[i])
    if(x % 2 === 0) {
        cnt += 1;
    }
}

console.log(cnt);