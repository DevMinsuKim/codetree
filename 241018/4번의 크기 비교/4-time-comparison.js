let fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let secondArr = arr[1].split(" ")

let a = arr[0]
let b = Number(secondArr[0])
let c = Number(secondArr[1])
let d = Number(secondArr[2])
let e = Number(secondArr[3])

if(a > b) {
    console.log(1)
} else {
    console.log(0)
}

if(a > c) {
    console.log(1)
} else {
    console.log(0)
}

if(a > d) {
    console.log(1)
} else {
    console.log(0)
}

if(a > e) {
    console.log(1)
} else {
    console.log(0)
}