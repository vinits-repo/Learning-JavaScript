const accountId = 212121
let accountEmail = "vinit@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "sample@gmail.com"
accountPassword = "123123"
accountCity = "Banaras"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])