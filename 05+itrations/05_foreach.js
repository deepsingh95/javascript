// foreach

const coding = ["py", "js", "rb", "java", "cpp"]

coding.forEach(function (val) {
    // console.log(val);
})


// arrow function

coding.forEach((item) => {
    // console.log(item);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFIle: "js"
    },
    {
        languageName: "java",
        languageFIle: "java"
    },
    {
        languageName: "python",
        languageFIle: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})