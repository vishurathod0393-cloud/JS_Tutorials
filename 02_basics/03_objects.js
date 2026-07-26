// Singleton
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: 'Vishal',
    "fullName":'vishal ramesh rathod',
    age: 22,
    [mySym]:'myKey1',
    location: 'Pune',
    email: 'vishal@google.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Friday']
    
}
// console.log(JsUser.email);
// console.log(JsUser.age);
// console.log(JsUser.name);
// console.log(JsUser[mySym]);
// console.log(JsUser["full name"])

// Object.freeze(JsUser)
// JsUser.email = 'rathod@gmail.com'

console.log(JsUser);


JsUser.greeting = function () {
    console.log("Hello Js User")
}

JsUser.greeting2 = function () {
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting2());
