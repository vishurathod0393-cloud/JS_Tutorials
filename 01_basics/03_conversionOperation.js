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



// ************************** Operation ****************************

console.log("************************** Operation ****************************")
let value = 3
let negValue = -value
console.log(negValue)


let str1 = "hello"
let str2 = " Vishal"

let str3 = str1 + str2

// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")

// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// console.log(+true)
// console.log(+"")

// console.log(num1)
// console.log(num2)

let gameCounter = 100
++gameCounter;

console.log(gameCounter);

gameCounter++

console.log(gameCounter);