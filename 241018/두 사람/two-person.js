const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ")
let b = input[1].split(" ")

let ageA = Number(a[0]), genderA = a[1]
let ageB = Number(b[0]), genderB = b[1]

if ((ageA >= 19 && genderA === "M") || (ageB >= 19 && genderB === "M")) {
    console.log(1)
} else {
    console.log(0)
}