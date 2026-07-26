// array

const myArr = [0, 1, 2, 3, 4, "Vishal", "R", 7]

const myHeors =["Rishi", "Rushi", "Tushar "]

// console.log(myArr)
// console.log(myArr[1])

// console.log(myHeors)


// Array method

// myArr.push(8)

// console.log(myArr)

// myArr.pop()


// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

console.log(myArr)


const newArr = myArr.join()

console.log(newArr)
console.log(typeof newArr)

// slice, splice


console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log('B', myArr);


const myn2 = myArr.splice(1, 3)
console.log("myn1",myn1)
console.log("myn2",myn2)
