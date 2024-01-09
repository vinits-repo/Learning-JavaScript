const name = "vinit "
const repoCount = 21

// console.log(name + repoCount + " value");

// String is a object
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vinit')
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-3, 4)
// console.log(anotherString);

const newStringOne = "  vinit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vinit.com/vinit%20yadav"

console.log(url.replace('%20', '-'));

console.log(url.includes('vinitt'));

const temp = new String('vinit-yadav')

// console.log(temp.split('-'));
