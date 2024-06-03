const accountId = 1234;
let accountEmail = "deepak@gmail.com";
var accountName = "deepak";

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

accountcity = "delhi";

let accountState;

accountEmail = "ds@gmail.com";
accountName = "king bob";
accountcity = "new york";

console.log(accountId);

console.table([accountId, accountEmail, accountName, accountcity, accountState]);