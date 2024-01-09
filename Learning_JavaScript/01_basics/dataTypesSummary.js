// JavaScript is Dynamically-typed

// Primitive Data Types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 23412341234123412341234n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["arjun", "karan", "bhim"]
let myObj = {
    name: "aryan",
    age: 12,
}

const myFunction = function(){
    console.log("Hare Krishna");
}

console.log(typeof heros);


// ##############################################################################################

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "vinityadav"

let anothername = myYoutubename
anothername = "learnwithme"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@sbi"
}

let userTwo = userOne

userTwo.email = "vinit@gmail.com"

console.log(userOne);
console.log(userTwo);