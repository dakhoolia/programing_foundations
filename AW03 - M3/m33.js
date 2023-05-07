//Math.round() – to round the number
//Math.floor() to get the integer part of the number
//Math.ceil() – to get the number rounded up
//Math.random() – to generate a random number from 0 to 1


// solved?
let global;

function storeValue() {
    const result = prompt("Provide the new data if you want to change it. Otherwise click Cancel.", global);
    if(result != null) {
        alert (result);
    } else {
    alert (global = "Provide the new data if you want to change it. Otherwise click Cancel.");
    }
}

// resolved
function addTwoNumbers() {
    let num1 = prompt("Provide the first number:");
    let num2 = prompt("Provide the second number:");
    if(isNaN(num1) || isNaN(num2)) {
        alert("Wrong data");
    }
    else {
        num1 = parseInt (num1);
        num2 = parseInt (num2);
        alert(("The final score is: ") + (num1 + num2));
    }
}

function extractMiddleString() {
    const text = prompt("Provide string containing at least 5 characters.")
    if(text.length < 5) {
        alert("Wrong data");
        return;
    }
    const startIndex = text.length / 2;
    const length = Math.round(text.length / 4);
    alert(text.substring(startIndex - length, startIndex + length + text.length % 2));
}

// resolved
function stringReplace() {
    let text = prompt("Provide string containing at least 5 characters.");
    if (text.length >= 5) {
        text = text.replace(/a/gi, '@').replace(/e/gi, '3').replace(/o/gi, '0');
        console.log(text);
    }
}


// resolved
function ifExample() {
    const age = parseInt(prompt("How old are you?"));
    if(!isNaN(age) || age > 1){
        if(confirm("Are you sure that your age is: " + age + "?")) {
        } else if(confirm("Definitely?")) {
                alert("Your age is " + age + "!");
                return;
        }
    } else {
        alert("I still don't know your age :(");
    }

}

//resolved
function switchExample() {
    const number = parseInt(prompt("Please provide a number from 1 to 5"));
    if(isNaN(number) || number < 1 || number > 5) {
        alert("Wrong data");
        return;
    }
    switch(number) {
        case 1:
            alert("Your favourite number is 1. It means you probably always want to win everything!")
            break;
            case 2:
                alert("Your favourite number is 2. It means you probably have really good relations with people!")
                break;
                case 3:
                    alert("Your favourite number is 3. It means you probably don't like to take a risk!")
                    break;
                    case 4:
                        alert("Your favourite number is 4. It means you probably are not afraid about anything!")
                        break;
                        case 5:
                            alert("Your favourite number is 5. It means you probably are a perfect student!")
                            break;
                            default:
                                alert("Something went wrong.")
                                break;
                            }
                        }


/* why don't we move these variables inside spliceExample()? */
let spliceText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare mauris eget tortor accumsan posuere. Mauris pharetra pellentesque libero, ut cursus eros consectetur nec. Suspendisse id erat vitae tellus cursus rutrum ut sit amet nisi. Aliquam cursus ultrices nisl in vestibulum. Nunc lacinia metus a venenatis pretium. Nullam vitae tincidunt ante. Duis posuere, dolor ac accumsan consequat, ex mi congue sem, sit amet fringilla tellus velit at neque. Donec luctus mi eu ligula volutpat semper. Maecenas vulputate bibendum velit, at finibus velit consectetur sed. Maecenas commodo feugiat lorem, vitae eleifend velit iaculis ut. Duis ac suscipit nisl. Sed vel metus.";
spliceText = spliceText.replace(/\.|\,/g, '');
// spliceText = spliceText.replace(/\,/g, ''); // combine with the former

function spliceExample() {
    //text from: https://www.lipsum.com/ - 100 words
    const array = spliceText.split(" ");
    const length = parseInt(prompt("Specify the word's length:"));
    if(isNaN(length) && length <= 0) {
        alert("Wrong length");
        return;
    }
    const index = array.findIndex(x => x.length == length);
    if(index >= 0) {
        const element = array[index];
        array.splice(index + 1, 2, element);
        // console.log(array);
        spliceText = array.join(" ");
    }
    return spliceText;
}

  function iteratorMethods() {
    const toAdd = prompt("Specify the text to add to each element of the current string");
    let spliceText = spliceExample();
    let array = spliceText.split(" ");
    array = array.map(word => word + toAdd);
    spliceText = array.join(" ");
    console.log(spliceText);
}

function infiniteLoop() {
    while(true) {
        const res = prompt("Write STOP to exit");
        if(res !== "STOP") {
            continue;
        }
        break;
    }
}


function ultimateExample() {
    const n = parseInt(prompt("Please provide the length of the side of the square"))
    if (isNaN(n) || n < 0 && n > 50) {
        alert("Wrong data");
        return;
    }
    for(let i=0; i<n; i++) {
        let line = "";
        for (let j=0; j<n; j++) {
            const number = Math.round(Math.random() * 4);
            switch(number) {
                case 1:
                    line += ".";
                    break;
                case 2:
                    line += "X";
                    break;
                case 3:
                    line += "|";
                    break;
                case 4:
                    line += "_";
                    break;
                default:
                    line += " ";
                    break;
            }
        }
        console.log(line);
    }
}