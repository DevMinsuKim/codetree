const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("-");
console.log(`${arr[0]}-${arr[2]}-${arr[1]}`);