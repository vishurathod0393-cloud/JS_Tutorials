
const name = "Vishal"

const repoCount = 8

// console.log(" concatinat : ",name + repoCount)

console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Vishal')

// console.log(gameName[0])
// console.log(gameName.__proto___);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));


// slising

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-0, 6)
console.log(anotherString)

// trim => remove the extra space 
const newStingOne = "   vishal   ";

console.log(newStingOne)
console.log(newStingOne.trim())


// replese string

const url = "https://vishal.com//vishal%30rathod"

console.log(url);
console.log(url.replace('%30', '-'))

// split => saprate the text on given basis

console.log(url.split('//'))