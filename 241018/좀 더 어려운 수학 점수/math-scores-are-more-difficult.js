const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let child1 = input[0].split(" ")
let child2 = input[1].split(" ")

let mathA = Number(child1[0]), engA = Number(child1[1]);
let mathB = Number(child2[0]), engB = Number(child2[1]);

if(mathA > mathB || (mathA == mathB && engA > engB)) {
    console.log("A")
} else {
    console.log("B")
}