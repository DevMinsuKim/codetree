const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0])
let n = Number(arr[1])

for(let i = 0; i < n; i++) {
    console.log(a += n);
}