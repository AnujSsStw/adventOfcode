const { log } = require("console");

let arr1 = [
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79,
];
let arr2 = [22, 23, 24];

let isFounded = arr1.every((ai) => arr2.includes(ai));
log(isFounded);

let isFounded2 = arr2.every((ai) => arr1.includes(ai));
log(isFounded2);
