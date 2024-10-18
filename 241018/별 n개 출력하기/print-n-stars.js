const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0]);
let i = 0;

while(i < a) {
    console.log("*");
    i++
}