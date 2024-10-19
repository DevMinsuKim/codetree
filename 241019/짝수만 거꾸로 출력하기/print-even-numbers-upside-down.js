const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let numberArr = input.map(Number).reverse();
let result = [];

for(const e of numberArr) {
    if (e % 2 === 0) {
        result.push(e);
    }
}

console.log(result.join(" "))