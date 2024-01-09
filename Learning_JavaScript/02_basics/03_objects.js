// singleton
// object.crete

// object literals

const mySym = Symbol("key1") // declaring Symbol

const JsUser = {
    name: "Vinit",
    "full name": "Vinit Yadav",
    [mySym]: "myKey1",
    age: 22,
    location: "Mumbai",
    email: "vinit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "vinit@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "vinit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hare Krishna");
}
JsUser.greeting2 = function(){
    console.log(`Hare Krishna, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());