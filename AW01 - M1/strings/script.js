// different type of string (always in quotes)

let name1 = "John";
let name2 = '123';
let name3 = "";
let name4 = '"johnny"';

let s = "hsahgf 1234";
let l = s.length; // how to calculate the length of a string
// result = 11 in console (5 letters 1 space 4 numbers)

let name = "will";
let message = `hey i'm ${name}`; // string interpolation ``

// you can also escape spexial characters like "" '' `` with /

let str = 'hey I\'m a string'; // result = hey i'm a string
    console.log(str);

console.log(str.length);// check legth

document.writeln("<h2>accessing characters</h2>")

//access the character desired 

console.log(str[0]);// reuslt = h
console.log(str[str.length -1]);// result = g / to access the las character

//concatenating string via + operator 

let str2 = "hello " + name1; // result hello john 

// assembele piece by piece 
let className = "8b ";
className += "ungdomsskole "; // result = 8b ungdomsskole
className += "grorud"; // result = 8b ungdomsskole grorud

let num = "8"; 
num = Number(num); // convert string to number 

let num1 = 12;
    console.log(toString(num1)); // undefined 

    // converting a non string value to string
let status = false; 
let str3 = status.toString(); // result 'false'
let back = Boolean(str3); // true 

// comparing stings
let result = `a` < `b`; 
console.log(result); // true a = 1, b = 2, c = 3, d = 4 etc

let result1 = `a` < `B`;
console.log(result1); //false

let text = 'hsajhadjhhgjkdaggd';
let length = text.length; // 18

// escape character / breaking lines of code
//unicode Characteres in JS
// http://www.unicode.org/charts/
// strings.fromCharCode(num [, num, num])
// myString.charCodeAt(index)
// \u0434
// \0 \' \" \\ \n \r \t

document.getElementById("demo").innerHTML = "hello \
Dolly!";
document.getElementById("demo1").innerHTML = 
"hello Dolly!";

// character numbers found in unicode.org
let yesRU = '\u0434\u0430'; // result 'да'
let milkDK = 'm\u00E6lk'; // mælk
let breadNO = 'br\u00F8d'; // brød 
let emojiJP = '\u3047\u3082\u3058'; // ぇもじ 

console.log(milkDK.charCodeAt(1)); //109
console.log('you\taa\ta'); // you   aa      a 

// javascript strings as objects 
let x = 'john'; // primative value
let y = new String('john'); // defined as object with keyword new
console.log(x == y); // true 
console.log(x === y); // false (even tough the value is the same one is an object)

let z = new String("hey");
let w = new String("hey");
console.log(z == w); // false 
console.log(z === w); // false (comparing obejcts always returns false)

// operation on strings 

let a = `abc`;
let b = `de`;
let c = `xyz`;
let d = a + b; 
document.writeln(d);
let e = a.concat(c);
document.writeln(e); 
// both + and .concat() do the same thing

document.writeln (`the alphabet starts with ${a} and ends with ${c}.`);

// to update a string by adding another sting 

a += b; // a now = abcde
document.writeln(a); 
// will not work with subtraction operator

document.writeln(a > b); // false
document.writeln(b > c); // true
document.writeln(a > c); // false
document.writeln(a > c); // true
document.writeln(b < c); // false 
document.writeln(a < c); // true

// js sting methods

let text1 = "milly og dani";
let slice = text1.slice(0, 5);
//document.writeln (slice);

let log = console.log;
log (slice); // result milly

let slice2 = text1.slice (-5);
log (slice2);// result dani 

let slice3 = text1.slice (-7, -5);
log (slice3);// result og

let slice4 = text1.slice(0);
log (slice4); // result milly og dani (everything after 0)

let substring = text1.substring (0, 5);
log (substring); // result milly but valuse less than 0 are treated as 0
// 0 and -5 will both result to everything after 0 

let substr = text1.substr(9, 4);
log (substr); // result dani
//(first parameter = starting point, secound parameter = how many letters after)

let substr2 = text1.substr(6);
log (substr2); // result og dani (if theres no 2 parameter the rest of the string is sliced)

let substr3 = text1.substr(-4);
log (substr3); 
// If the first parameter is negative, the position counts from the end of the string.

let emoji = "hey how are you😋";
log(emoji.charAt(15)); // result ? (emoji contains multiple index)
log (emoji.substring(15)); // result 😋

let replaceText = text1.replace("dani", "dyana");
log (replaceText); // reuslt milly og dyana

// replace () only replces the fist match 
// replace () is case sensetive 
// replace () does not cahnge the string its calle og but returns a new string

// to avoing case sensetivity 

let replaceText1 = text1.replace(/MILLY/i, "salman");
log (replaceText1);

// to replace all matches 

let text2 = "me and you, him and her, they and them";
let replaceText2 = text2.replace (/and/g, "or"); 
log (replaceText2);
// all (and)'s are replaced with (or)'s

// replaceAll () allows to replace expression instead of a string
// no new string is needed to be created
let text3 = "I love cats. Cats are very easy to love. Cats are very popular";
text3 = text3.replaceAll (/cats/g, "dogs");
text3 = text3.replaceAll (/Cats/g, "Dogs");
log (text3);
// result I love dogs. Dogs are very easy to love. Dogs are very popular
// repalce all does not worok in browsers older than ES2021

// these are called Regular Expression / /i and / /g



let text7 = "is\n this al\nl th3r\n3 is? 12345";
log (text7);

log (text7.match(/\d/g)); // (3) result 3,3,3 ( \d finds digits)
log (text7.match(/\s/g)); // (8) all the spaces found
log (text7.match(/[1-4]/g)); // 3,3,1,2,3,4
log (text7.match(/\bis/g))// (2) is,is (start of a word)
log (text7.match(/is\b/g))// (3) is,is,is (end of a word) 

const pattern = /d/;
log (pattern.test("du er dum som dunker drugs")); // true ( because the is d in the text)

log (/w/.test("er du fra england eller estonia")); //false  shortened version ^

const obj = /e/.exec("The best things in life are free!");
log("found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input);
// result "Found e in position 2 in the text: The best things in life are free!""

const myStr = "hey, i'm 25 and she's 31!";
log (myStr.replace(/(\d+)([^\d]+)(\d+)/g, "$3$2$1"));
// selecting first digit, selecting non digit ^, selecting digit, $ giving new order of each section
// result 31 $3 (\d+) and she's $2 ([^\d]+) 25 $1 (\d+)/g

// toUpperCase and toLowerCase

let upperCase = text1.toUpperCase();
log (upperCase); // result MILLY OG DANI

let lowerCase = upperCase.toLowerCase();
log (lowerCase); // result milly og dani

let conText = text1.concat(" ", text2, " ", text3);
log (conText);

let text4 = "   this needs to be trimmed    ";
let trim = text4.trim();
log (trim); // method removes whitespace from both sides of a string

let trim2 = text4.trimStart();
log (trim2); // only start white space is removed 

let trim3 = text4.trimEnd();
log (trim3); // whitespace at the end is removed

let text5 = "yo";
let padded = text5.padStart(4, "x");
log (padded); // reuslt xxyo (pads a sting with another string)
// if text = y, result == xxxy because vaule of 4 in first parameter
// padding padds a sting = to the legth desired 

let padded2 = text5.padEnd(7, "z");
log (padded2); // result yozzzzz

// padstart() & padend() are string methods 
// number have to be converted to string first

let char = text1.charAt(2);
log (char); // result l

let charCode = text1.charCodeAt (2);
log (charCode); //108 (-16 UTF code)
// charCodeAt returns an integer between 0 and 65535

log (text1 [0]); // property access (simular to charAt())
// makes strings look like arrays but they are no 
// if no character is found, [] returns undefined, while charAt() returns empty sting
//It is read only. str[0] = "A" gives no error (but does not work!)
text1 [0] = "D"; // gives no error but does not work 

let text6 = "a,b,ce , d|,g,h";
let myArray = text6.split(","); // what you want to split 
log (myArray[2]); // is split by the 3 comma (everything behind 3 comma)

let myArray1 = text6.split("|");
log (myArray1[0]); // result a,b,ce , d 

// empty .splic("") = the returned array will be an array of single characters


// finiding the position of a certain phrase within a string 

let find = text1.indexOf("dani");
log (find); // result 9 first occurrence of dani within the string
// returns the index of character d 

let text8 = "you and dani were tryna walk but dani ran";
// to find the last occurance 
let find2 = text8.lastIndexOf("dani");
log (find2); // result 33 (the first d in the secound dani)

let find3 = text8.lastIndexOf("dani", 12);
log (find3); // result 8, search starts at the end of the index (12)

let find4 = text8.lastIndexOf ("milly"); // result (-1) on text not found
log (find4);

let find5 = text8.indexOf("dani", text8.indexOf("re")+2);
log (find5); // Resul 33  (find the first "dani" after the index of "re" +2)

let search = text8.search("and");
log (search); // result 4 (and starts at the 4th character in string)

let search1 = text8.search("dani"); // result 8
let search2 = text8.search(/dani/); // resut 8 regular expression
log (search2); 

// regular expressions 
let regExp = text8.startsWith("you"); // true
let regExp1 = text8.includes("dani"); // true 
let regExp2 = text8.includes ("you", 4); // false (search starts at index 4)
let regExp3 = text8. endsWith ("dani"); // false
let regExp4 = text8. endsWith ("dani",12); // true (checks the end of index 12)

log (regExp, regExp1, regExp2, regExp3, regExp4);

// both index accept secound parameter

/*
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/

// matching values

let matchText = "The rain in SPAIN stays mainly in the Plain";
log (matchText.match("ain")); // returns an array [index5] containing the result (only first match)

// regular expression match method 
log (matchText.match(/ain/)); // result [index5]

// global search 

log (matchText.match(/ain/g)); // result 3 (amout of matches)

// global and caseinsensetive
log (matchText.match(/ain/gi));  // result 4

let iteText = "I love cats. Cats are very easy to love. Cats are very popular.";

const iterator = iteText.matchAll("Cats");
document.writeln(Array.from(iterator)); // result Cats,Cats

const iterator1 = iteText.matchAll(/cats/g);
document.writeln(Array.from(iterator1)); // result Cats,Cats,cats

const iterator2 = iteText.matchAll(/cats/gi);
document.writeln(Array.from(iterator2)); // result cats,Cats,Cats




