// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
        // console.log("7 is used for thala for the reason");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer part of the scope ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner scope is ${j} and inner scope is ${i}`);
        console.log(i + "*" + j + " = " + i * j);

    }
}

let myArray = ["Spiderman", "Thor", "Ironman", "Hulk"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);

}

// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`index is ${index}`);

// }

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        // console.log(`detected 5`);
        continue;
    }
    // console.log(`value of i is ${index}`);

}