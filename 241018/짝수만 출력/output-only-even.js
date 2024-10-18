const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0])
let b = Number(arr[1])

let i = a;

let result = ''
while(i <= b) {
    result += i + " "
    i += 2;
}

console.log(result);