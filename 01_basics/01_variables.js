

const accountId = 12345
let accountEmail = "viahal@google.com"
var acccountPassword = "123456"
accountCity = "Pune"
let accountState;

// not allowed
// let accountId = 5

/*
Prefer not use var
because of issue in block scope and functional scope
if you define any variable and not assigne any value then it value is undefined

*/

accountEmail = "hr@gmail.com"
acccountPassword = "123"
accountCity = "Hingoli"

console.log(accountId);
console.table([accountId, accountEmail, acccountPassword, accountCity, accountState])