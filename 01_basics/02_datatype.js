"use strict"; // treate all js code as newer version

// console.log("deepak");

let name = "deepak";
let age = 23;
let isLoggedin = false;

//7 type of datatypes
/*
premitive 

number => 2, 3, 4
string => "deepak"
boolean => true/false
null => standalone value
undefined
symbol => unique
bigint

object => 

*/

// console.log(typeof "deepak");
// console.log(typeof null);

//referance (non premitive)

// array, object, function

const Cars = ["maruti", "ferrari", "mustang"];

const myObj = {
    name: "car",
    age: 23
}

const myFunction = function () {
    console.log(myFunction);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// stack (premetive) / heap (non-premitive)

let myYoutubeName = "deepaksingh@gmail.com";

let anotherName = myYoutubeName;

anotherName = "codeingnewera";

console.log(myYoutubeName);
console.log(anotherName);


// java script is a single thread

