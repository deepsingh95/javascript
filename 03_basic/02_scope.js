let a = 300

function anyobject() {
    let a = 10;
    const b = 20;

    // console.log("Inner:", a);
}

// console.log(a);

// {} => this is scope

function one() {
    const username = "Deepak";

    function two() {
        const website = "youtube"
        // console.log(username);
    }

    // console.log(website);

    two()
}

one()

if (true) {
    const username = "deepak"

    if (username === "deepak") {
        const website = " youtube";
        // console.log("deepak " + " youtube");
    }

    // console.log(website);

}
// console.log(username);

console.log(addOne(5))

function addOne(num) {
    return num + 1;
}



const addTwo = function (num) {
    return num + 2;
}

addTwo()