// for of

["", "", ""]

[{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(`number of arr is ${num}`);
}

const greetings = "hello sir"

for (const greet of greetings) {
    //console.log(`greeting to the user ${greet}`);
}

// MAP

const map = new Map

map.set('IN', 'india')
map.set('USA', 'United state of America')
map.set('FR', 'France')

// console.log(map);

for (const [key, value] of map) {
    console.log(key, "-", value);
}