// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++) {
        let result = i * j
        // console.log(`${i} * ${j} = ${result}`);
    }
    // console.log();
}

let myArray = ["IronMan", "SpiderMan", "Thor", "Captain America"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
}