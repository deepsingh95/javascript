// object are declared in 2 type 1. literal 2. constructor

//singleton - this create own type of object.

//object literals,
const mySym = Symbol("key1");

const jsUser = {
    name: "Deepak",
    "full name": "deepak singh",
    age: 23,
    [mySym]: "key1",
    location: "delhi",
    email: "ds@email.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]
}

// console.log(jsUser.location);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "dsingh@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "kshbshb@gmail.com";
// console.log(jsUser);

jsUser.greeting = function () {
    console.log(`hello JS user`);
}
jsUser.greetingtwo = function () {
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());