const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let A = input[0].split(" ")
let B = input[1].split(" ")

if (Number(A[0]) > Number(B[0])) {
    console.log("A")
} else if (Number(A[0]) === Number(B[0])) {
    if (Number(A[1]) > Number(B[1])) {
        console.log("A")
    }
} else {
    console.log("B")
}