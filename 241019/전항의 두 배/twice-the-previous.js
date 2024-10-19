const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a = input[0];
let b = input[1];

let result = Array(10);
result[0] = a;
result[1] = b;

for(let i = 2; i < result.length; i++) {
    result[i] = result[i - 1] + result[i -2] * 2
}

console.log(result.join(" "));