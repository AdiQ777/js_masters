// named function

// function add(x, y) {
//     return x + y;
// }
//
// const result = add(x: 1, y: 2);
// console.log(result);

// anonymus function
// classic

// function expression
// const add2 = function (x, y) {
//     return x + y;
// }
//
// console.log(add2( x: 1, y:2 ))
//

function range(start, stop, step=1) {
    if (stop === undefined) {
        stop = start;
        start = 0
    }

    const temp = [];
    let counter = start;

    while (temp.length < (stop - start) / step){
        temp.push(counter);
        counter += step;
    }

    return temp
}

// console.log(range(10));
// console.log(range(5, 10));
// console.log(range(2, 10, 3));
// console.log(range(10, 2, -1));
// console.log(range(10, 2));

// Arrow functions
// - name fn example for comparisom
function add(a, b){
    return a + b;
}

// anonymous classic fn for comparison
const add1= function (a, b) {
    return a + b;
}

// arrow fn for comparison
const add2 = (a, b) => {
    return a + b;
}

// arow with params
const magic = a => {}
const magic2 = (a, b) => {}
const magic3 = () => {}

// arrow with implicite return
const magic4 = () => {
    // explicite return
    return 42;
}

// implicite return only without curly braces
const magic5 = () => 42;


const is_palindrome = (text) => {
    return text.toLowerCase() === text.toLowerCase().split('').reverse().join('');
}

// console.log(is_palindrome('Ala'));
// console.log(is_palindrome('kajak'));
// console.log(is_palindrome('dupa'));


const hello = (name) => {
    return `Cześć ${name[0].toUpperCase() + name.slice(1).toLowerCase()}, mój panie!`;
}


console.log(hello('andrzej')); // Cześć Andrzej, mój piękny panie!'