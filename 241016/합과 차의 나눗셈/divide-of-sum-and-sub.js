const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let sum = Number(arr[0]) + Number([arr[1]])
let diff = Number(arr[0]) - Number([arr[1]])
console.log((sum / diff).toFixed(2));