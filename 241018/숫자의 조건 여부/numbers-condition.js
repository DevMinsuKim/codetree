const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

if (input >= 113) {
    console.log(1)
} else {
    console.log(0)
}