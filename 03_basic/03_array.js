const user = {

    username: "deepak",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// this is refer as a contest in scope

// function one() {
//     let username = "deepak"
//     console.log(this.username);
// }

// one()

// const chai = function () {
//     let username = "deepak"
//     console.log(this.username);
// }

const chai = () => {
    let username = "deepak"
    console.log(this);
}

// chai()

// const addthree = (num1, num2) => {
//     return num1 + num2
// } => explicite return

// const addthree = (num1, num2) => num1 + num2
// const addthree = (num1, num2) => (num1 + num2)   => implicite return

// const addthree = (num1, num2) => ({ username: "deepak" }) this is boject

// console.log(addthree(5, 8));

