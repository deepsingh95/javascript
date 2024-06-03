// map is a callback functioon insted of foreach use map function or use both in different case

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.map((num) => {
//     return num + 10;
// })
const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums);