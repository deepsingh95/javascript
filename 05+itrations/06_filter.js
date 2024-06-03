// filte

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);

const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums);

const book = [
    {
        title: "book one", genre: "friction", publish: 2000, edition: 2003
    },
    {
        title: "book two", genre: "horror", publish: 2005, edition: 2010
    },
    {
        title: "book three", genre: "history", publish: 1980, edition: 1985
    },
    {
        title: "book four", genre: "science", publish: 1986, edition: 1990
    },
    {
        title: "book five", genre: "non-friction", publish: 2020, edition: 2024
    },
    {
        title: "book six", genre: "history", publish: 1979, edition: 1990
    },
    {
        title: "book seven", genre: "science", publish: 2006, edition: 2010
    },
    {
        title: "book eight", genre: "horror", publish: 1999, edition: 2003
    },
    {
        title: "book nine", genre: "friction", publish: 2002, edition: 2006
    },
];

let userBook = book.filter((bk) => bk.genre === "friction")

userBook = book.filter((bk) => {
    return bk.publish > 2000 && bk.genre === "horror"
})

console.log(userBook);