function sayMyName() {
    console.log("V")
    console.log('i')
    console.log("S")
    console.log('H');
    console.log("A")
    console.log("L")
}


// sayMyName()

function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2);
    return num1 + num2

}

// const result = addTwoNumbers(7, 99);

// console.log("Result : ", result);


function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a  username");
        return
    }
    return `${username} just logged in`
}

// const login = loginUserMessage(); // when i not pass any value then output is undefined 
// console.log("User name is :", login)



function calculateCartPrice(val1, val2, ...num1) {
    return num1

}
// console.log(calculateCartPrice(200, 300, 400, 500, 600))

const user = {
    username: "vishal",
    price: 300,

}

function handleObject(anyonject) {
    console.log(`Username is ${anyonject.username} and price is ${anyonject.price}`)
}

handleObject(user)
handleObject({
    username: "Rathod",
    price: 500
})


const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))



// scope