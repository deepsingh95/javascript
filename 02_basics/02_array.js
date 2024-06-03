const marvel_Heros = ["ironman", "thor", "spiderman"];
const dc_Heros = ["superman", "flash", "batman"];

// marvel_Heros.push(dc_Heros);

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);


// const allHeros = marvel_Heros.concat(dc_Heros);
// console.log(allHeros);

// const newHeros = [...marvel_Heros, ...dc_Heros];
// console.log(newHeros);

const new_array = [1, 2, 3, [4, 5, 6, 7], [8, 9, 2], [4, 7, 9]];

const real_array = new_array.flat(Infinity);
// console.log(real_array); // to find the depth in the array

// console.log(Array.isArray("Deepak"));
// console.log(Array.from("Deepak"));

let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score1, score2, score3));