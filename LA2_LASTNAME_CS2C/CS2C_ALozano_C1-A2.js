let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e =  15;

console.log("Sum: ",a + b + c + parseInt(d) + e); // convert d string to integer and add
console.log(d > e); //f
console.log(d < e); //f
console.log(d >= e); //t
console.log(d <= e); //t
console.log(d === e); //false bcause not the same dtype

let subtract = a - b - c - parseInt(d) - e; // / convert d string to integer and subtractt
let multiply = (a * c) / e; // multiply firs a and c then divide the e
let exponent = (e ** c); // constant e raise to the power of variable c.
const reassign = (e ** 3); // Reassign the value of c.3 to constant e,

console.log(subtract);
console.log(multiply);
console.log(exponent);
console.log(reassign);