const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

bmi = Math.floor(input[1] / ((input[0] / 100) ** 2))

console.log(bmi)
if (bmi >= 25) {
    console.log("Obesity");
}