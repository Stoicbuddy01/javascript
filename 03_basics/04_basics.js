// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


//why to use IIFE?
// globaL scope ke pollution se problem hoti ha kai baar so global scope ke variables or declarations ke pollution ko hatane ke liye IIFE use kiya jata ha 