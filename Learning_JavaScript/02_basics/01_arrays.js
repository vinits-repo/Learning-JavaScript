// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHeros[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // it will remove last value of the array

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(1));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(myn2);