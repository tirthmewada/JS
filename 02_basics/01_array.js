const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);



const Arr = new Array(1,2,3,4,5)
console.log(Arr.at(2));


//Array Methods

myArr.push(6)
console.log(myArr);

const myn1 = myArr.slice(1,4)
console.log(myn1);

const myn2 = myArr.splice(1,4)
console.log(myn2);

//Part-2 Array 

const marvel_hero = ["Ironman" , " Thor", "Spiderman"]
const dc_hero = ["Batman" , "Flash" , "Superman"]

//marvel_hero.push(dc_hero)
//console.log(marvel_hero);

const allhero = marvel_hero.concat(dc_hero)
console.log(allhero);

const another_array = [1,2,3,[4,5],6,[7,8,[9]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

let score1 = 100 
let score2 = 200
let score3 = 300 

 console.log(Array.of(score1,score2,score3));
 