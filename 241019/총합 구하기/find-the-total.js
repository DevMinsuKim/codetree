const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

let sumVal = 0;

for(let i = a; i <= b; i++) {
    if(i % 6 === 0 && i % 8 !== 0) {
        sumVal += i;
    }
}

console.log(sumVal);