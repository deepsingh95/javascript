// Dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// // console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 7);
// let myCreateDate = new Date(2024, 0, 7, 6, 4);
// let myCreateDate = new Date("2024-01-15");
let myCreateDate = new Date("01-12-2024");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now() / 1000));