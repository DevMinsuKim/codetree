const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let sortArr = arr.map(Number).sort((a,b) => a - b)

console.log(sortArr[1])