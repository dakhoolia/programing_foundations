let x = Math.random();
if (x > 0.5) {
    console.log("Hello, it's nice to see you here");
} else {
    console.log(x);
}

let num1 = 1;
let num2 = 4;

/*

what breakpoint buttons do: 

-Resuming the application (after it goes into another breakpoint if there are more).

- Only the next line will execute.

- Only the next line will execute. We’ll move to its implementation when going into the method.

- The entire code in this function or file will perform.

- Deactivates all breakpoints.

- Determines if the application should stop on exceptions. Exceptions are the special types of errors caused by the application code itself.


*/ 

// alerts 

if (x > 0.5) {
    // alert () has an ok button and is for giving info
    alert ("Hello, it's nice to see you here");
} else {
    // confirm () has a cancel button and gives user option
    confirm (x);
}

// 1 parameter is question 2 parameter is default value 
let y = prompt("Pleas pass the number between 0 and 1", "0,5");
if (y > 0.5) {
    alert ("hello, it's nice to see you here!");
} else {
    alert (y);
}

let person = prompt ("please enter your name", "SATURN");

if (person != null) {
    alert ("hello " + person + "! How are you?");
}

let text; 

let favteam = prompt ("what1s your favourite forball team?")

switch (favteam) {
    case "Real Madrid": 
    text = "you're one of those huh?"
        break;
    
    case "Atletico Madrid":
    text = "AUPA ATLETIIIIII";
        break;
    
    default: 
    text = "I've heard of them!";
}

document.writeln (text);
