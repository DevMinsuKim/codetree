const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

if (input % 3 === 0 || input % 5 === 0) {
    console.log(1)
} else {
    console.log(0)
}