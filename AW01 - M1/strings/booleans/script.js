/*
As types in JavaScript are dynamic, 
variables of various types can be converted to Booleans.
In such cases, when a variable x has a ‘value’, the Boolean(x) result is true,
and when a variable x doesn’t, Boolean(x) is false.
*/

let log = console.log;

// when a variable has value booleans = true if there is no value such as 0 NaN etc = false

// Boolean function to find if a expression is true 

let tOrF = Boolean (10 > 9); 
log (tOrF); // true 

// even easier 

log (10 > 9); // true 

// everything with 'value' is True

/*
100 

3.14

-15

"hello"

"false"

7 + 1 + 3.14
*/
let t = true;
log (Boolean(t)); // true

// everything without a 'value' is false 

let x = -0;
log (Boolean(x)); // false

let y;
log (Boolean(y)); // false 

let z = null;
log (Boolean(z)); // false

let a = false; 
log (Boolean(a)); // false

let b = 10 / "hallo"; //NaN (Not a Number)
log (Boolean(b)); false

// Booleans as Objects

// created as objects with keyword: new

let obj = Boolean (false); // boolean (false)
let obj1 = new Boolean (false); // object with value {false}
let obj2 = new Boolean (false); // object with value false

log ( obj, obj1);

log (obj == obj1); // true (both contain false)

log (obj === obj1); // false (one is boolean one is object)
// different data type

// comparing two js objects always returns false
log (obj1 == obj2); // false
log (obj1 === obj2); // false

// if statements 
// most basic conditional statement 
// used with spesific conditions which must be boolean
// code of block will be executeted if statment is true

/* if (condition) {
    //code to be executed
}
*/

// {} defne the scope of the statement block
// spacing of {} is up to the person coding 

let number = 10; 
if (number > 5) {
    document.writeln(number);
} // return 10 


let name1 = "danial";

if (name1.length < 10) {
    document.writeln(name1);
} // result danial

// else statment if (if) statment is false else statment will be executed

/*
basic else statement 

if (conditions) {

} else {

}
*/

let name2 = "MilenaTsegaiTedros"
if (name2.length < 10) {
    document.writeln(name1);
} else if (name2.length > 10) {
    document.writeln("name is longer than 10");
} else {
    document.writeln("no name will be displayed")
}

// result name is longer than 10

// if statement 
if (new Date().getHours() < 18) {
    document.writeln ("good Day");
} // result good day

const hour = new Date().getHours();
let greeting;

// if, else statement 

if (hour < 18) {
    greeting = "good morning";
} else {
    greeting = "good evning"
} 

document.writeln (greeting);
// result good evening

// else if statement 

const time = new Date().getHours();
let greeting1;

if (time < 10) {
    greeting1 = "you're an early bird";
} else if (time < 20) {
    greeting1 = "you're just on time";
} else {
    greeting1 = "you're a night owl";
}

document.writeln(greeting1);
// result you're just on time 

var answer = window.confirm ("Do you want to continue?");
// pop up with cancel/ok 

if (answer === true) {
    log ("Proceeding");
} else {
    log ("bye");
} //result based on if cancel or ok 

var answer2 = window.prompt("are you sad?!");

if (answer2 === "yes") {
    log ("talk to a friend❤️");
} else if (answer2 === "no") {
    log ("keep it up!😄");
} else {
    log ("hmmmmm");
}

// nested if statements
let aa = 1;
let bb = 3;

if (aa > 0 && bb <= 0) {
    log (aa);
} else if (aa > 0 && bb > 0) {
    log (bb);
} // result 3 



var spend = 55;

if (spend >= 20) {
    if (spend >= 50) {
        if (spend >= 100) {
            log (" you get free shipping!");
        } else {
            log ("$5 for shipping");
        }
    } else {
        log ("$7.50 shipping");
    }
} 
else {
    log ("$10 for shipping");
} // result 7.50 shipping 


// switch statements 

/*
switch (expression) {
    case x:
        code block
        break;
    case y:
        code block 
        break;
    case z:
        code block
        break;
}
*/

let xx = 2;
switch (xx) {
    case 1: 
        document.writeln("1");
        break;
    case 2: 
        document.writeln("2");
        break;
    default: 
        document.writeln("3");
} // result 2

// this is equal to 

if (xx == 1) {
    document.writeln ("1");
} else if (xx == 2) {
    document.writeln("2");
} else {
    document.writeln("3");
} // result 2

// good practice to use switch statements instead
let day;
switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1: 
        day = "monday";
        break;
    case 2: 
        day = "tuesday";
        break; 
    case 3: 
        day = "wednesday";
        break;
    case 4: 
        day = "thursday";
        break;
    case 5: 
        day = "friday";
        break;
    case 6: 
        day = "saturnday";
}

log (day); // result = todays weekday

// When JavaScript reaches a break keyword, it breaks out of the switch block.
//The default keyword specifies the code to run if there is no case match

let text; 

switch (new Date().getDay()) {
    case 6:
        text = "today is saturn day";
        break;
    case 0: 
        text = "today is sunday";
        break;
    default:
    text = "looking forward to the weekend";
}

log (text);

// The default case does not have to be the last case in a switch block

switch (new Date().getDay()) {
    default:
    text = "looking forward to the weekend";
        break;
    case 6:
        text = "today is saturn day";
        break;
    case 0: 
        text = "today is sunday";
}

// common code blocks 
// switch cases want using same code

let text1;
switch (new Date().getDay()) {
    case 4: 
    case 5:
        text1 = "nearly weekend";
        break;
    case 0:
    case 6:
        text1 = "it is weekend";
        break;
    default:
        text1 = "looking forward to the weekend";
}

log (text1); 

// switching details

/*
Switching Details
If multiple cases matches a case value,
the first case is selected.

If no matching cases are found, 
the program continues to the default label.

If no default label is found,
the program continues to the statement(s) after the switch.
*/

/* switch cases use Strict Comparison

Switch cases use strict comparison (===).

The values must be of the same type to match.

A strict comparison can only be true if the operands are of the same type.

In this example there will be no match for x:
*/

let text2;
let xy = "0";
switch (xy) {
    case 0:
        text2 = "Off";
        break;
    case 1:
        text2 = "On";
        break;
    default:
        text2 = "No value found";
}

/*
the Ternary Operator 

concise way of using conditionals (only in one line)

x = condition ? expression1 : expression2 

when the condition is true the first expression is assigend 
if not the secound expression is assigend to variable x

works like an else if operator with simpler synthax 

possible to nest ternerary operators but not best practice
*/

let a1 = 2;
let b1= 3; 
let c1 = a1 > b1 ? a1 : b1;
log (c1); // result 3