// let myName = 'Deepak';

// console.log(myName.trueLength());

// we need to create a method not property

let myHeros = ["thor", "hulk"]

let heroPower = {
    thor: "hammer",
    hulk: "big green",  // use as key value pair

    getAllHeros: function () {
        console.log(`hulk power is ${smash}`);
    }
}

Object.prototype.deepak = function () {
    console.log(`deepak is present in all object`);
}

Array.prototype.Heydeepak = function () {
    console.log(`deepak say hello`);
}

// heroPower.deepak()
// myHeros.deepak()
// myHeros.Heydeepak()


// inheritance

const user = {
    name: "deep",
    email: "deep@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingAssistant = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingAssistant
}

teacher.__proto__ = user

// access other property is called inheritance

// modern syntax
Object.setPrototypeOf(teachingAssistant, teacher)

let anotherName = "DeepakSingh"

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`the true lenght is: ${this.trim().length}`);
}

anotherName.trueLength()
"Deepak".trueLength()
"Singh".trueLength()