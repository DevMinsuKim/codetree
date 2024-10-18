const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let numberArr = Number(arr);

squareArea = numberArr ** 2

console.log(squareArea);
if(arr < 5) {
    console.log("tiny");
}