const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let result = 0
let i = 0;

while(true) {
    num = Number(arr[i])
    if(num < 20 || num > 29) {
        result = (result / i).toFixed(2);
        break;
    }

    result += num;
    i += 1;
}

console.log(result);