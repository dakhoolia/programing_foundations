// define two variables 
let x = 15; //= number variable 

let name = "Milena"; //= string variable

let u; // undefined varibale 

let result = name + x;

document.writeln(result); // on page Milena15
// this results to number varibale converting to string 

let z = 5;
let y = 7; 
let name1 = "Danial"

let result1 = z + y + name1;
let result2 = name1 + z + y;
document.writeln(result1); //12Danial
document.writeln(result2); //Danial57 
// result is based on the order from left two right 
//(numbers are adde first) befor converting to string on result1 

let dynamic; 
dynamic = 12;
dynamic = "blue";
// types are dynamic and change

let xx = 10;
let yy = 20;
let zz = "the result is: " + xx + yy; // = the result is: 1020

let zz1 = "the result is: " + (xx + yy); // solve

let number1 = 999999999999999; // result exact number
let number2 = 9999999999999999; // result 10000000000000000

// only 15 digets accuracy before rounding up 

// maximum decimals is 17 

let expo = 72e5; // = 7 200 000
let expo1 = 72e-5; // = 0,00072

document.writeln(expo);
document.writeln(expo1);

// ^exponential notation (opphøyd i f.eks 2^4=16)

let x1 = 33.33; // able to add decimals 

let deci = 0.2 + 0.1; // 0.3000000000004 decimals not always accurate 

// how to solve 

let deci1 = (0.2 * 10 + 0.1 * 10) / 10; // reuslt 0.3

let _x = Math.round(7.5); // result 8 (rounds to closest)

console.log(_x);

let _y = Math.floor(7.7); // result 7 (floors no matter what)

console.log(_y);

Math.ceil(7.2); // result = 8 (rounds up no matter what)

Math.max(7, 4, 9, 12); // result = 12 (gives max number )

Math.PI; // 3.14 


// NaN is used when computer can't perform an operation 
console.log(55 / "hey"); // result NaN

// infinity is a constant = to the biggest number possible in JS
// since the memory is infinite, there has to be the biggest number
console.log(55 / 0); 


let stringType = "string";
let stringType2 = 'string1';

// ^different ways to write a string

let quote = "roses are red 'violets' are blue";
let quote1 = 'roses are "red" violets are blue';

document.writeln(quote);
document.writeln(quote1); 

// how to put "quotes"/'quotes' in a string (by using nonmatching quotation marks)

// math objects
