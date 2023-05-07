let log = console.log;

// Arrays [] are the perfect type to store a list of items 

// array example const array = [item1, item2, item3]
const my_array = ["danial", 21, "oslo"];

log (my_array[2]); // result oslo 

//different way of creating an array
const myArray = [];

myArray[0] = "fisrt item";
myArray[1] = "secound item";
myArray[2] = "third item";
myArray[3] = "fourth item";

log (myArray); // result all items 
log (myArray [1]); // result secound item

log (myArray.length); // result 4 

// length allows us to easlie change the fist and last item

myArray [0] = "the new first item";
myArray[myArray.length - 1] = "The new Last item";
// myArray [4 -1] = "the new last item"

log (myArray);

// you can change the value of items but not the array itself (const)

// arays are container like values that hold other values

// array elements can be any value even other arrays

const arrayInArray = [["Milena", "Elias", "Jorsa", "Dyana",], ["danial", "salman"]];
log (arrayInArray[1]); // result (2) danial salman

// concat () an array 
const newArray = ["item zero"].concat (myArray);

log (newArray); // adds "item zero" to myArray list with a newArray

// pop () removes last element and returns removed elements value 

let popArray = newArray.pop ();

log (popArray); // result the new last item

//push () adds and item and returns length 
const pushArray = newArray.push ("hey");

log (pushArray); // 5

// reverse retuns an array in opposite order 
let reverseArray = newArray.reverse();

log (reverseArray); // reversed 

// .shift() and unshift() (add and remove the first time) like pop() and push()

// block scope arrays 
const cars = ["BMW", "RR", "Audi"];
// cars [0] is "BMW"
{
    const cars = ["TOYOTA", "RR", "Audi"];
    //cars 0 is TOYOTA
}
 // cars 0 is BMW


var cars1 = ["BMW", "MERC", "LAMB"];
// cars1 0 is BMW
{
    var cars1 = ["audi", "MERC", "LAMB"];
    // cars1 0 is audi
}
// cars1 0 is audi

// challange
// remove last item ✅
// move last item to first position ✅
// set items alpghabetically ✅
// find specific item in array  ✅
// remove a spesific item from array ✅

const collection = ["ball", "airforces", "umbrella", "iphone", 7];
log (collection);

collection.pop();
log (collection);


collection.unshift(collection.pop());
log (collection); 

collection.sort();
log (collection);

log (collection.indexOf ("ball")); // 1 
let findItem = collection.find (item => item === "ball");
log ("found item", findItem);

collection.splice (1,1);
log (collection) //  ball is removed


// Activity 
let name = prompt("what's your name?");
let surname = prompt("what's your surname?");
let age = parseInt (prompt("how old are you?"));

const promptArray = [name, surname, age];
log (promptArray);

// turn array to string

// toString() method
let string = collection.toString();
log (string); // airforces,iphone,umbrella

// join ()
let betterString = collection.join (" - ");
log (betterString); // airforces - iphone - umbrella

// turn string to array

let myString = "hey this is my string that i'm truning to an array";

const array1 = myString.split(" "); // split string by (space)
log (array1); // ['hey', 'this', 'is', 'my', 'string', 'that', "i'm", 'truning', 'to', 'an', 'array']

// concat multiple arrays 

const arr1 = [1, 2, 3];
const arr2 = [4, 12, 6];
const arr3 = [7, 4, 9];
const concatArr = arr1.concat(arr2, arr3); // the order of the parameteres 

log (concatArr);

const spreadArr = [...arr1, ...arr2, ...arr3];
log (spreadArr); // [1, 2, 3, 4, 12, 6, 7, 4, 9]

const numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(3, 2, 8, 9, 10); 
log (numbers); // [1, 2, 3, 8, 9, 10, 6]
// splice 
// The first parameter stands for the index we’re starting from
// The second parameter tells us how many values we want to delete
// All other parameters stand for values we want to add to our array
// start at indec 3, remove 2 values, add number 8 , 9 and 10 in 


// activity 

let num = parseInt (prompt("enter number 1:"));
let num1 = parseInt (prompt("enter number 2:"));
let num2 = parseInt (prompt("enter number 3:"));

const allNum = [num, num1, num2];
allNum.splice (1,1,)
allNum.push (allNum[0], allNum[1] / 2);

log (allNum);

// array Iterator methods

let array_it = [1, 2, 5, 6, 3, 0];
let returnIt = array_it.map (myFunction);

function myFunction (value) {
    return console.log(value * 2);
}

const even = array_it.filter (isEven);

function isEven(value) {
return console.log(value % 2 == 0);
}

const sum = array_it.reduce(add);
console.log(sum); // result 17
function add(total, value) {
    return total + value;
}

const sum2 = array_it.reduce ((total, value) => total + value);
console.log(sum2); // 17

// Multidimensional arrays
// is an array containing an array 

const multiDim = [[0, 1], [2, 3], [3, 4]];
const multiDim2 = [[[0], [2, 1]], [3, 8, [6]]]; 

log (multiDim);
log (multiDim2);

// access the first item 
console.log(multiDim[0]); // [0, 1]

// access the first item of the first inner array
console.log(multiDim2[0][0]); // [0]

// access the second item of the third inner array
console.log(multiDim[2][1]); // 4