// Dates


let myDate = new Date()
console.log(myDate);

// console.log("ToString :",myDate.toString())
// console.log("toISOString :",myDate.toISOString())
// console.log("toISOString :",myDate.toISOString())
// console.log("toLocaleDateString :",myDate.toLocaleDateString())
// console.log("toLocaleString :",myDate.toLocaleString())
// console.log("toTimeString :", myDate.toTimeString())

// console.log("Type of Date : ", typeof myDate)

// let myCreatedDate = new Date(2026, 6, 26)
// console.log("My created date : ", myCreatedDate.toDateString())

// let mycreateDate = new Date('2026-07-26');
// console.log("My created date  yy-mm-dd: ", mycreateDate.toLocaleString())

let MycreateDate = new Date('07-26-2026');
// console.log("My created date  dd-mm-yy: ", MycreateDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(MycreateDate.getTime());
// console.log(Math.floor(Date.now() / 100));


let newDate = new Date();

console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay() + 1)


newDate.toLocaleString('default', {
    weekday: "long"
})