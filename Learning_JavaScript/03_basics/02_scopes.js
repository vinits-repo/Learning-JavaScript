let a = 100
if(true){
    let a = 10
    const b = 20
    // console.log("inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "vinit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "vinit"
    if(username === "vinit"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



//  ++++++++++++++++++++++++++++++++ intersting ++++++++++++++++++++++++++++++++


console.log(addone(5));

function addone(num){
    return num + 1
}

// addTwo(8)
const addTwo = function(num){
    return num + 2
}