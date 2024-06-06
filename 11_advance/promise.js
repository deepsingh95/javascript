const promiseOne = new Promise(function (resolve, reject) {
    // Do an Asynce task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log('asynce task is complete');
        resolve();
    }, 1000);
})

promiseOne.then(function () {
    console.log('promise consumed');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Asynce promise 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log('resolve asynce 2');
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "deepak", email: "deepak@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Singh", email: "singh@example.com" })
        } else {
            reject('error : something went wrong')
        }
    }, 1000)
})


promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log('the promise is resolve or reject'));



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve('username: "javascript", password: "123"')
        } else {
            reject("error: JS went wrong")
        }
    }, 1000);
})


async function consumePromise() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))