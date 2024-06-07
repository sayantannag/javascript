const accountId = 144533
let accountEmail = "sayan@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

accountEmail = "sayantan@gmail.com"
accountPassword = "000000"
accountCity = "Mumbai"

// accountId = 2 // not allowed

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functioanl scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])