const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ")
let b = input[1].split(" ")

let ageA = a[0], genderA = a[1]
let ageB = b[0], genderB = b[1]

if ((ageA >= 19 || ageB >= 19) && (genderA === "M" || genderB === "M")) {
    console.log(1)
} else {
    console.log(0)
}