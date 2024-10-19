const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = input[0];
let b = input[1];

if(a.length > b.length) {
    console.log(a)
} else if (a.length < b.legnth) {
    console.log(b);
} else {
    console.log("same");
}