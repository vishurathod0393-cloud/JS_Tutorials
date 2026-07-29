const userEmail = "vishal@gmail.com"

if(userEmail){
    console.log("got user email");

}else{
    console.log("Don't' have user  eamil");
}


// falsy values

// false, 0 , -0, BigInt 0n, "" null , undefined, NaN 

// truthy values

// true , 1, -1, "value", "0", 'false' ," ", [], {}, funciton(){}, 





if (userEmail.length === 0){
    console.log("Array is emplty")
}else{
    console.log("Array is not emplyt")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty ")
    
}else{
    console.log("object is not empty")
}

// Nullish COalescing Operator (??): null undefined


let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1)


// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80")