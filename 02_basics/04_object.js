const user = {}
user.id = "123";
user.email = "user@gmail.com";
user.name = "sam";

// console.log(user);

// object of object

const regularuser = {
    email: "sam@gmail.com",
    username: {
        fullname: {
            firstname: "Deepak",
            lastname: "singh"
        }
    }
}

// console.log(regularuser);
// console.log(regularuser.username.fullname);

const onj1 = { 1: "A", 2: "B" };
const onj2 = { 3: "A", 4: "B" };
const onj3 = { 5: "A", 6: "B" };

const obj4 = { ...onj1, ...onj2, ...onj3 };
// console.log(obj4);

const users = [
    {
        id: "1",
        email: "deep@gmail.com"
    },
    {
        id: "2",
        email: "deep23@gmail.com"
    },
    {
        id: "3",
        email: "deep43@gmail.com"
    },
    {
        id: "4",
        email: "deep87@gmail.com"
    },
]


users[1].email
// console.log(users);
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));

const course = {
    coursename: "JS",
    courseid: "1234",
    Instructor: "deepak"
}

const { Instructor: instruction } = course

console.log(instruction);


// <---------API-------->

// API is come form backend and how to write. which is written in JSON formate


// JSON is objec
// {
//     "name": "deepak",
//         "age": 20,
//             "email": "ds@gmail.com"
// }

// array object

[
    {},
    {},
    {}
]