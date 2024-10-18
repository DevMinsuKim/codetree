const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let A = input[0].split(" ")
let B = input[1].split(" ")

if (A[0] > B[0]) {
    console.log("A")
} else if (A[0] === B[0]) {
    if (A[1] > B[1]) {
        console.log("A")
    }
} else {
    console.log("B")
}