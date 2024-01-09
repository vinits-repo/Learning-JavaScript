const user = {
    username: "vinit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "rishi"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "vinit"
//     console.log(this.username);
// }

const chai = () => {
    let username = "vinit"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Hari"})


console.log(addTwo(5, 3));