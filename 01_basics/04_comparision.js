console.log(2 > 1)
console.log(2 >= 1)

console.log(2 < 1);
console.log(2 == 2)
console.log(2 === "2")
console.log("3" > 1)


/*

The reason is that an equality check == and comparisons ><>=<= work diffrently.
comparisons convert null to a number, treating it as 0.
That's way (3) null >= 0 is true and (1) null > 0 is false.

*/


console.log("2" === 2)