const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
//marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

//const all_hero = marvel_heros.concat(dc_heros)

//console.log(all_hero)

const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros)

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array)

console.log(Array.isArray("Amit"))
console.log(Array.from("Amit Kumar"))
console.log(Array.from({name: "Amit Kumar"})) // interesting case for interview as well

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

