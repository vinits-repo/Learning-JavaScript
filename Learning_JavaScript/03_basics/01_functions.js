function sayMyName(){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){

    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(1,7)

// console.log("Result: ", result);

function loginUserMessage(username = "Narayan"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hari"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(100, 200, 300, 500, 1000));

const user = {
    username: "vinit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "aryan",
    price: 199
})

const myNewArray = [100, 200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 600, 900, 1000]));