

const user = {
    username: "vishal",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "Ajit";
// user.welcomeMessage()

// console.log(this)



// function chai() {
//     let username = "vishal"
//     console.log(this.username)
// }

// chai() 


// Arrow function 

const chai = () => {
    let username = "vishal"
    // console.log(this.username)
    console.log(username)
}

// chai()

const addTow = (num1, num2) => {
    return num1 + num2;

}

console.log(addTow(8, 8))

// implicit return

const addtwo = (num1, num2) => num1 + num2;


const addTwo = (num, num2) => (num + num2)

const addttwo = (num1, num2) => ({ username: "vishal" })

console.log(addttwo(9, 9))