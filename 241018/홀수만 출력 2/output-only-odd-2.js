const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0])
let b = Number(arr[1])

let result = ''
for(let i = a; i >= b; i -= 2){
    result += (i + " ")
}

console.log(result);