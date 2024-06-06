function multiplyBy5(num) {   //create function and take num as input
    return num * 5
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// in javascript everything is object
// function is function and also it is called object
// function ---> object ---> null
// array ---> object ---> null
// string ---> object ---> null

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++   // this is used for current context, jine bulaya hai us ke pass jao
}
createUser.prototype.printMe = function () {
    console.log(`price of ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 35)

chai.printMe()
tea.printMe()


/* a new object is created: the new keyword initiates the creation of a new javascript object

a prototype is linked 

the constructor is called

the new object is returned

*/