// Array

const myArr = [1, 2, 3, 4, 5, 6];

// console.log(myArr);

//Array method

// myArr.push(8);
// myArr.pop();
// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr);

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

// slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("c ", myArr);

console.log(myn2);