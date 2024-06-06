const user = {
    username: "deepak",
    loginCount: 6,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got the user details from Database");
        // console.log(`username: ${this.username}`);  // this use to acces the username from user
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// objects

function User(username, loginCount, isLogedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = isLogedIn;

    this.greeting = function () {
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne = new User('deepak', 6, true)
const userTwo = new User('Singh', 8, false)

// new keyword used to create an empty object which is also known as instance

console.log(userOne.constructor);
// console.log(userTwo);