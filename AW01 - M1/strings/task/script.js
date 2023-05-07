let text = "My favourite book is \"Harry Potter\". I love this book so much.";

let resultText1 = text.slice(0, 35); 
let resultText2 = text.substr (0,3) + text.slice (13, 21) + text.substring(37, 43);
let resultText3 = text.slice (0,3) + text.substr(13, 22);
let resultText4 = text.substr (28, 6) + " "+ text.slice(22, 27);


console.log((resultText1));
console.log(resultText2);
console.log(resultText3);
console.log(resultText4);

