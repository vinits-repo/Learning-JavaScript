const score = 400
// console.log(score);

const balance = new Number(110)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));;

const anotherNumber = 121.599
// console.log(anotherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());


// ***************************************** Maths *******************************************

// console.log(Math);
// console.log(Math.abs(-1));
// console.log(Math.round(5.6));
// console.log(Math.ceil(4.2)); // ceil will be choose upper value 
// console.log(Math.floor(4.9)); // floor will be choose lower value

// console.log(Math.min(5, 8, 1, 6));
// console.log(Math.max(8, 5, 6, 7, 9, 1));

console.log(Math.random()); // it will give random values
console.log(Math.random()*10); // it will give random value and after multiply of 10 one digit will shift towards left
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// (max - min + 1) --> it will give the range of num required and after add of 1 its value will be more than 1
// after adding (min) --> it will give all value more than the min or atlest min
