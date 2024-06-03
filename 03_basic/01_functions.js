function sayMyName() {
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}

// sayMyName();

// function addTwoNumber(number1, number2) { addTwoNumber is function
//     // console.log(number1 + number2);

// };


function addTwoNumber(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
};

// `${}` => string interpullation 

const result = addTwoNumber(5, 6);

// console.log("result:", result);

""
function userLoginMessage(username = "sam") {
    if (username === undefined) {
        console.log("Please enter your username");
        return
    }
    return `${username} is logged in`
}

// console.log(userLoginMessage("Deepak"));
// console.log(userLoginMessage());


// ... =>  spread opreator and rest opreator.

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 300, 400));


const user = {
    username: "bottle",
    price: 200
}


function handleObject(anyobject) {
    console.log(`username is ${anyobject.username}, and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 499
// })


const myarray = [200, 300, 400, 500]

function returnSecondValue(getarray) {
    return getarray[1]
}

console.log(returnSecondValue(myarray));