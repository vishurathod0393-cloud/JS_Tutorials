// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = "Vishal";
tinderUser.isLoggedIN = false;


// console.log(tinderUser)

const regularUser = {
    email: "vishal@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ajit",
            lastname: 'Rathod'
        }
    }
}

console.log(regularUser.fullname.userfullname);


const obj1 = {1: 'a', 2:'b'}
const obj2 = { 3: 'c', 4: 'd' }

const obj3 = obj1 + obj2
// console.log("Obj1 :", obj1);
// console.log("Obj2 :",obj2);
// console.log("Obj3 :",obj3);

const obj4 = Object.assign(obj1, obj2)
const obj5 = Object.assign({}, obj1, obj2)
const obj6 = {...obj1, ...obj1}
// console.log("Obj4 :",obj4)
// console.log("Obj5 :",obj5)
// console.log("Obj6 :",obj6)

const user = [
    {
        name: 'vishal',
        age: 22
    },
    {
        name: 'Tushar',
        age: 18
    },
    {
        name: 'Ajit',
        age: 18
    },
    {
        name: 'Nitesh',
        age: 23
    },
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn));


const course = {
    coursename: 'js in hindi',
    price: '999',
    couseInstructor:'vishal'
}

const {couseInstructor: instructor} = course
console.log(instructor);




// const navbar = ({company}) => {
    
// }

// navbar(company ='vishal')

[
    {},
    {},
    {}
]