// Primitive

// 7 types :String, Number, Boolearn, null, undefined, Symbol , BigInt

const score = 100;

const isLoggdIn = false
const outsideTemp = null

console.log("Data type of outsideTemp :" , typeof outsideTemp)

let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log("Check :", id === anotherId)

const bigNumber = 2345678891234n;
console.log(bigNumber)
console.log("Data Type of bigNumber :", typeof bigNumber)

// javaScript is a dynamic typed

// Reference ( Non Primitive )

// Array, Objects, Functions

const heros = ["vishal", "naagraj", "doga"];
let myObj = {
    name: "vishal",
    age:22,
}

const myFunction = function () {
    console.log("Hello world")
}
myFunction()
console.log("Funciton data type : ", typeof myFunction)
console.log("Data type of heros : ", typeof heros)
console.log("Data type of myObj ;", typeof myObj)



console.log("============================================== Memory ================================")

// ============================================== Memory ================================


// Stack  (Primitive)

let myYoutubename = "VishalRathodyoutube"

let anotherName = myYoutubename

console.log("anotherName :", anotherName);
console.log("myYoutubename :", myYoutubename);

anotherName = "chaiaurcode"

console.log("anotherName :", anotherName)
console.log("myYoutubename :", myYoutubename)

// Heap (Non-Primitive)

let userOne = {
    
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

console.log("UserOne :", userOne)
console.log("UserTwo :", userTwo)

userTwo.email = "rathod@google.com"

console.log("UserOne :", userOne)
console.log("UserTwo :", userTwo)

