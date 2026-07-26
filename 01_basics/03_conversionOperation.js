import { isNumberObject } from "node:util/types";

let score = "33qbc"
let num = null;

console.log(typeof score);
console.log(typeof (score))

let valueInNumber = Number(score)

let valueInNumber2 = Number(num)

console.log(typeof valueInNumber2)
console.log(typeof (valueInNumber))

console.log(valueInNumber)
console.log(valueInNumber2)

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

let number = 33

console.log(number)

let numToString = String(number)

console.log(typeof numToString)
console.log(numToString)


/*

"33" => 33
"33abc" => NaN
true => 1; false => 0

*/