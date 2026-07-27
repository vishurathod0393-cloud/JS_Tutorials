//  Global Scope 

if (true) {
    // BLOCK SCOPE 
    let a = 20;
    const b = 30;
    var c = 50;

    // console.log("Inner A :", a)
}
let a = 79;
// console.log("outer A :", a)
// console.log(b);
// console.log(c);



// nested socpe

function one() {
    const username = "vishal";

    function two() {
        const website = "youtube"
        // console.log("User name :", username)
    }
    // console.log("web side :", website)
    two()
}

// one()


if (true) {
    const username = "vishal";
    if (username == "vishal") {
        const website = " youtube";
        // console.log(username + website)
    }
    // console.log(website)
}



// =================================================


function addone(num) {
    return num + 1;
}

console.log(addone(6))

const addTwo = function (num) {
    return num + 6
}

console.log(addTwo(7))