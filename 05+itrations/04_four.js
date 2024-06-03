// for in

const myObject = {
    "js": "javascript",
    "rb": "ruby",
    "cpp": "c++",
    "swift": "apple"
}

for (const key in myObject) {
    // console.log(`${key} is used for ${myObject[key]}`);
}

const programming = ["js", "java", "py", "cpp", "rb"]

for (const key in programming) {
    console.log(programming[key]);
}