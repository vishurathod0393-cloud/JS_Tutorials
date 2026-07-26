// numbers\

const score = 400

const balance = new Number(100)

// console.log(balance);
// console.log(score)
// console.log("balance: ",typeof balance)
// console.log("score :",typeof score)



const otherNumber = 1123.8976

// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000

// console.log("USA :",hundreds.toLocaleString());
// console.log("India :", hundreds.toLocaleString("en-IN"));



//  ========================================= Math ================================= 

// console.log(Math);
// console.log("absolute value :", Math.abs(-5));

// console.log("Round", Math.round(4.6));
// console.log("ceil value :", Math.ceil(4.2))
// console.log("floor value :", Math.floor(4.5))

// console.log("Min number :", Math.min(4, 5, 6, 7, 7));
// console.log("Max Number : ", Math.max(5, 20, 8, 9));

console.log(Math.random());   // is  only give under value on 0 to 1 
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min + 1))+ min)