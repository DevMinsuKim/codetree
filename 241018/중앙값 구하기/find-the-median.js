const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let sortArr = arr.map(Number).sort()

console.log(sortArr[1])