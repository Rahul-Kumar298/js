const accountId = 145363
let accountEmail = "rahul@sincity.in"
var accountPassword = "215425"
accountCity = "Pune" // we can also declare varaible like this but this is not conventional so avoid it.
let accountState; // we can also declare variable assign its value later

// accountId = 21554 // once A const is declared it cannot be changed so avoid doing this.

accountEmail = "rah@sc.mo"
accountPassword = "3565"
accountCity = "Paris"
/*
prefer not to use var 
'cause of the issue of block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])