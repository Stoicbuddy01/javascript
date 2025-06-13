const accountID = 12345
let accountEmail = "ankit21@gmail.com"
var accountPassword = "3456"
accountCity = "Kolkata"
let accountState;

/* prefer not to use var
because of issue in block scope and functional scope 
*/


accountEmail =  "4567"
accountPassword = "chaiwala@gmail.com"
accountCity = "calicut"

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
