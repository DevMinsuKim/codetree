const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let num = Number(arr[0])
let result = ''

for (let i = 1; i <= num; i++) {
    result += (i + " ")
}

console.log(result);