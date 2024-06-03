const useremail = ""
// const useremail = "ds@gmail.com"

// if (useremail) {
//     console.log("user has email");
// } else {
//     console.log("user has not email");
// }

/* false, 0, -0, 0n, "", null, undefined, BigInt, NaN */

// truthy value
// true, " ", "false", {}, [], function(){}

if (useremail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// null coalscing operator (??) : null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = null ?? 10 ?? 20;
val1 = undefined ?? 50;
console.log(val1);


// ternary oprator

// conditon ? true : false

const coffeeprice = 100

coffeeprice <= 80 ? console.log("less then 80") : console.log("more then 80");