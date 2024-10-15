const fs = require("fs");
let strArr = fs.readFileSync(0).toString().split(" ");
let numArr = strArr.map(Number);
let sum = numArr[0] + numArr[1] + numArr[2];
let average = sum / numArr.length;
let diff = sum - average
console.log(sum);
console.log(average);
console.log(diff);