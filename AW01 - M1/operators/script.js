

//assignment operators

let a = 8;

a += 8; // = a = a/(8) + 8

// if 

let b = 9 

b *= 5 // b(9) = b(9)*5 which equals 45 (now b is equal to 45)
b /= 2 // b(45) = b(45) / 2 which equals 22.5 (now b is 22.5)


c = 6 
c *= 2 
c -= 5 
// c = 7 

// Arithmetic operators 

let x = 100 + 20 - 3 * 4 / 2; // all of these are arithmetic operators

let y = 5 ** 3; // 125 = 5*5*5 or 5^3 exponentiation (potens) 
console.log(y);

// increment
let z = 5 
const w = z++; // result (z = 6) (w = 5)
    console.log(w);
    console.log(z);

// Decrement
let v = 4; 
const u = v--; // result (u = 4) (v = 3)

// the browser return current value first but when recalling value changes 

--v; // this makes brower increment before returning v = 2 

    console.log(v);
    console.log(u);

// modulus or remainder
let percent1 = 20; 
let precent2 = 3;
let remainder = percent1 & precent2; 
// 3*7 is 21 we have to take 3*6 = 18 remainder is 2 

// comparison operatores are where we check/compare 

let age = 15; // age is 15 (assignment) 
age == 15; // age is either 15(number) or "15"(string) / statement = true 
age === 15; // age is 15 (both same number and type) / statement = true 
age != 15; // age is neither 15 or "15" / statement =false 
age !== 15; // age is not the same number or type / statement = false 
age !== "15" // statement = true  (not same type)
age > 20 // 15 > 20 statement fales ( age is not greater than 20) 
age <= 20 // 15 <= statement is true (age is lesser or equal to 20)


// logical operators 

// && means and 

let elias = 4; 
let salman = 19; 

(elias < 10 && salman > 1); 
// statment = true / Salman is older than 1 and elias is younger than 10 
(elias < 3 && salman > 1); // statement = false Elias is not younger than 3

// || means or
(salman == 20 || elias == 7);
// statement = false / neither salman or(||) Elias are 20 ||(or) 7
(salman = 18 || elias == 4); //statement = true Elias is 4  

// ! not
!(elias === salman); // statement = true / they are not the same age
!(elias > salman); // statment = false /because salman is older 

let milena = "19";
let danial = "21";

milena > danial //true
// ~the statement that is read first will call true as > if both values are strings
danial > milena // ture 
danial < milena // false 

const myInt = 5;
const myFloat = 6.667;

myInt;
myFloat;

// check type of 
console.log(typeof myInt); // will show number or string based on value

// how to move decimal places in number (toFixed(number of decimals desired))
const lotsOfDecimals = 7.28452874;
    const twoDecimalPlaces = lotsOfDecimals.toFixed(2);

console.log(twoDecimalPlaces);

//converting to number data types

let myNumber = "444";
myNumber += 3; // result = 4443 and typeOf = string

// fix issue by 

let myNumber2 = "23";
myNumber2 = Number(myNumber2) + 4; // result = 27 typeOf = number

// test yourself 

const num1 = 10;
const num2 = 50;

9 * num1; // result = 90
num1**3; // result = 1000 (10 * 10 * 10)
num2 + num1 / 8 + 2; // follow the PEDMAS rule E = exponent/potens


