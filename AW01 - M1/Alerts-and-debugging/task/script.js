
let x = parseFloat (prompt("Please pass the number between 0 and 1", "0.5"));

if (isNaN(x) || x < 0 || x > 1) {
    y = parseFloat (prompt("Please pass the number between 0 and 1", "0.5"));
} if (isNaN(x) || x < 0 || x > 1) {
    alert ("your data is wrong");
} else if ( x > 0.5) {
    alert ("hello it's nice to meet you");
} else {
    alert (x)
}

const veggies = ["carrot", "tomato", "brocolli", "pepper", "aspargus", "mushroom", "cucumber", "onion", "garlic", "bell pepper"];

const evenveggie = veggies.filter(isEven);

function isEven(value) {
    return (value.length % 2 == 0);
}

alert (evenveggie);
