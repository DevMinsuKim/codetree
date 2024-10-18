const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let str = ''

for(let i = 0; i < n; i++) {
    str = ''
    for(let j = 0; j < n; j++) {
        str += "*"
    }
    console.log(str);
}

console.log(" ")

for(let i = 0; i < n; i++) {
    str = ''
    for(let j = 0; j < n; j++) {
        str += "*"
    }
    console.log(str);
}