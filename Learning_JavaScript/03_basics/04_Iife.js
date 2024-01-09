// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// To avoid the global scope pollution (declared variables, etc), we use IIFE   
// use semicolon after use of IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('vinit')