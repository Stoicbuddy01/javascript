const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); //important for mking of e-commerce website 
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));    // used for round figure like 4.6=>5
// console.log(Math.ceil(4.2));     // ceil will always give the next greater integer . example - 4.2=>5 or 4.6=>5
// console.log(Math.floor(4.9));    // floor will alwayad give the floor number . example - 4.2=>4 or 4.9 =>4
// console.log(Math.min(4, 3, 6, 8)); // for giving the minimum value 
// console.log(Math.max(4, 3, 6, 8)); // for giving the maximum value 

console.log(Math.random()); // math.random gives the values between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // important formula needed for future use 