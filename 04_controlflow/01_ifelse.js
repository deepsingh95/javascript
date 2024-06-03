// control flow or logic flow in with exection will be done properly

// if statement

// <,>,<=,>=, ==, !=, === type check

if (true) {
    // execution perform
}

if (false) {
    // not perform
}

// const temprature = 41;

// if (temprature === 40) {
//     console.log("less then 50");
// } else {
//     console.log("temprature is greater then 50");
// }

// console.log("temprature");


const userLoggedIn = true
const creditCard = true
const loggedWithGoogle = false
const loggedWithEmail = true

if (userLoggedIn && creditCard) {
    console.log(`user can purchase everyting.`);
}

if (loggedWithGoogle || loggedWithEmail) {
    console.log("user loggen in");
}