const myNums = [1, 2, 3]

// const newNums = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const newNums = myNums.reduce((acc, carrval) => acc + carrval, 0)

// console.log(newNums);


const shoppingCart = [
    {
        courseName: "javaScript",
        price: 1999
    },
    {
        courseName: "java",
        price: 2999
    },
    {
        courseName: "full stack developer",
        price: 3999
    },
    {
        courseName: "python",
        price: 999
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);