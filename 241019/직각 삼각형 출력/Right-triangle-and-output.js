const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0])

let str = ''
for(let i = 1; i <= n; i++) {
    str = ''
    for(let j = 1; j < i * 2; j++) {
        str += "*"
    }
    console.log(str);
}